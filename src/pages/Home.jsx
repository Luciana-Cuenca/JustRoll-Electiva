import Hero from "../components/home/Hero";
import QuickFeatures from "../components/home/QuickFeatures";
import FeaturedCompositions from "../components/home/FeaturedCompositions";
import LearningSection from "../components/home/LearningSection";
import NewsSection from "../components/home/NewsSection";
import "../styles/home.css";

function Home() {
  return (
    <>
      <Hero />
      <QuickFeatures />
      <FeaturedCompositions />
      <LearningSection />
      <NewsSection />
    </>
  );
}

export default Home;