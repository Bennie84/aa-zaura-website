// src/pages/HomePage.jsx
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Abdussalam Abdulkarim Zaura"
        description="Official website of AA Zaura, Nigerian businessman, philanthropist, and political leader. Learn about his business, philanthropy, and public service."
        canonical="/"
      />
      <HeroSection />
      <IntroSection />
    </>
  );
}
