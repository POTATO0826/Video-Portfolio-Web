import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Background from "./components/Background";
import Methodology from "./components/Methodology";
import Findings from "./components/Findings";
import Analysis from "./components/Analysis";
import VideoPortfolio from "./components/VideoPortfolio";
import Recommendations from "./components/Recommendations";
import EvidenceGallery from "./components/EvidenceGallery";
import References from "./components/References";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Background />
        <Methodology />
        <Findings />
        <Analysis />
        <VideoPortfolio />
        <Recommendations />
        <EvidenceGallery />
        <References />
      </main>
      <Footer />
    </div>
  );
}
