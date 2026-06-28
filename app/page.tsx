import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { PageBackground } from "@/components/page-background";
import { PortfolioHero } from "@/components/portfolio-hero";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WorkExperienceSection } from "@/components/work-experience-section";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-[#263d37]">
      <PageBackground />
      <SiteHeader />
      <PortfolioHero />
      <AboutSection />
      <WorkExperienceSection />
      <GallerySection />
      <SiteFooter />
    </main>
  );
}
