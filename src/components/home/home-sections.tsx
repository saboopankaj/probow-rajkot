import { HealthyFoodIntro, WhyProBow } from "@/components/home/sections/food-sections";
import { AudienceSection, HealthyMeals, PreparationSteps, Reviews } from "@/components/home/sections/experience-sections";
import { DeliverySection, DeliveryZones, OfficeMeals, PackagingSection, RajkotDelivery } from "@/components/home/sections/delivery-sections";
import { HomeFaq, StorySections } from "@/components/home/sections/story-sections";
import { OrderCta } from "@/components/home/sections/order-cta";

export function HomeSections() {
  return <>
    <HealthyFoodIntro />
    <WhyProBow />
    <Reviews />
    <PreparationSteps />
    <DeliverySection />
    <PackagingSection />
    <AudienceSection />
    <StorySections />
    <HomeFaq />
    <RajkotDelivery />
    <HealthyMeals />
    <DeliveryZones />
    <OfficeMeals />
    <OrderCta />
  </>;
}
