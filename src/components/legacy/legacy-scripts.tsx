"use client";

import { useEffect } from "react";
import { createProbowApiClient } from "@/lib/probow-api";

export type LegacyScript = {
  src?: string;
  code?: string;
  async?: boolean;
  defer?: boolean;
};

type LegacyScriptsProps = {
  scripts: LegacyScript[];
};

type ReadyListener = EventListenerOrEventListenerObject;
type ReadyTarget = Document | Window;
type ReadyAddEventListener = (
  type: string,
  listener: ReadyListener,
  options?: boolean | AddEventListenerOptions,
) => void;

function runReadyListener(
  target: ReadyTarget,
  listener: ReadyListener,
): void {
  const event = new Event("DOMContentLoaded");
  window.queueMicrotask(() => {
    if (typeof listener === "function") {
      listener.call(target, event);
    } else {
      listener.handleEvent(event);
    }
  });
}

export function LegacyScripts({ scripts }: LegacyScriptsProps) {
  useEffect(() => {
    let cancelled = false;
    const inserted: HTMLScriptElement[] = [];
    const api = createProbowApiClient();
    window.ProbowApi = api;

    const originalDocumentAdd: ReadyAddEventListener = (type, listener, options) =>
      EventTarget.prototype.addEventListener.call(document, type, listener, options);
    const originalWindowAdd: ReadyAddEventListener = (type, listener, options) =>
      EventTarget.prototype.addEventListener.call(window, type, listener, options);
    const documentTarget = document as unknown as {
      addEventListener: ReadyAddEventListener;
    };
    const windowTarget = window as unknown as {
      addEventListener: ReadyAddEventListener;
    };

    documentTarget.addEventListener = (type, listener, options) => {
      if (type === "DOMContentLoaded" && document.readyState !== "loading") {
        runReadyListener(document, listener);
        return;
      }
      originalDocumentAdd(type, listener, options);
    };

    windowTarget.addEventListener = (type, listener, options) => {
      if (type === "DOMContentLoaded" && document.readyState !== "loading") {
        runReadyListener(window, listener);
        return;
      }
      originalWindowAdd(type, listener, options);
    };

    const loadScripts = async () => {
      for (const descriptor of scripts) {
        if (cancelled) return;

        const script = document.createElement("script");
        inserted.push(script);

        if (descriptor.src) {
          script.src = descriptor.src;
          script.async = Boolean(descriptor.async);
          script.defer = Boolean(descriptor.defer);

          if (script.async) {
            document.body.append(script);
            continue;
          }

          await new Promise<void>((resolve) => {
            script.onload = () => resolve();
            script.onerror = () => resolve();
            document.body.append(script);
          });
        } else if (descriptor.code) {
          script.textContent = descriptor.code;
          document.body.append(script);
        }
      }
    };

    void loadScripts();

    return () => {
      cancelled = true;
      documentTarget.addEventListener = originalDocumentAdd;
      windowTarget.addEventListener = originalWindowAdd;
      inserted.forEach((script) => script.remove());
      if (window.ProbowApi === api) {
        delete window.ProbowApi;
      }
    };
  }, [scripts]);

  return null;
}
