import Header from './components/Header';
import ActionGrid from './components/ActionGrid';
import PromoCards from './components/PromoCards';
import ServicesGrid from './components/ServicesGrid';
import HighlightsCarousel from './components/HighlightsCarousel';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="min-h-screen bg-primary-light">
      {/* Main content wrapper - centered on desktop */}
      <div className="max-w-[1200px] mx-auto relative">
        {/* Blue header section */}
        <Header />

        {/* Quick Actions floating card */}
        <ActionGrid />

        {/* Promo feature cards */}
        <PromoCards />

        {/* Services grid */}
        <ServicesGrid />

        {/* Highlights carousel */}
        <HighlightsCarousel />

        {/* Bottom padding for nav */}
        <div className="h-20" />
      </div>

      {/* Fixed bottom navigation */}
      <BottomNav />
    </div>
  );
}

export default App;
