(function () {
  const loader = document.createElement("div");

  loader.id = "probow-menu-loader";

  loader.innerHTML = `
    <div class="probow-loader-mark">
      <img
        src="/assets/images/brand-logo/logo-green.png"
        alt="PROBOW"
      />
    </div>

    <div class="probow-loader-text">
      <strong>PROBOW</strong>
      <span>healthy, but never boring.</span>
    </div>

    <div class="probow-loader-dots">
      <i></i><i></i><i></i>
    </div>
  `;

  const style = document.createElement("style");

  style.textContent = `
    #probow-menu-loader {
      width: 100%;
      min-height: 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: transparent;
      pointer-events: none;
      opacity: 1;
      transition: opacity .18s ease;
    }

    #probow-menu-loader.is-hidden {
      opacity: 0;
    }

    .probow-loader-mark {
      width: 52px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: probowLoaderFloat 1.4s ease-in-out infinite;
    }

    .probow-loader-mark img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .probow-loader-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.2;
    }

    .probow-loader-text strong {
      font-size: 13px;
      letter-spacing: .16em;
      color: #43692d;
    }

    .probow-loader-text span {
      margin-top: 3px;
      font-size: 11px;
      color: #7b8175;
    }

    .probow-loader-dots {
      display: flex;
      gap: 4px;
      margin-top: 5px;
    }

    .probow-loader-dots i {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #43692d;
      animation: probowLoaderDot 1s ease-in-out infinite;
    }

    .probow-loader-dots i:nth-child(2) {
      animation-delay: .15s;
    }

    .probow-loader-dots i:nth-child(3) {
      animation-delay: .3s;
    }

    @keyframes probowLoaderFloat {
      0%, 100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-5px);
      }
    }

    @keyframes probowLoaderDot {
      0%, 100% {
        opacity: .25;
        transform: translateY(0);
      }

      50% {
        opacity: 1;
        transform: translateY(-2px);
      }
    }

    @media (max-width: 600px) {
      #probow-menu-loader {
        min-height: 140px;
      }

      .probow-loader-mark {
        width: 46px;
        height: 46px;
      }
    }
  `;

  document.head.appendChild(style);

  function showLoader() {
    const container = document.getElementById("menu-items-container");

    if (!container) return;

    if (!document.getElementById("probow-menu-loader")) {
      container.prepend(loader);
    }
  }

  function hideLoader() {
    const el = document.getElementById("probow-menu-loader");

    if (!el) return;

    el.classList.add("is-hidden");

    setTimeout(() => {
      el.remove();
    }, 200);
  }

  window.PROBOWLoader = {
    show: showLoader,
    hide: hideLoader
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showLoader);
  } else {
    showLoader();
  }

})();