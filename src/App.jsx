// v5.3
import { useState, useRef, useEffect } from 'react';

// --- DATA ---

const actions = [
  {
    id: 'scan',
    label: 'Scan',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M3 17v2a2 2 0 002 2h2M17 21h2a2 2 0 002-2v-2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h2v8H7zM15 8h2v8h-2z" />
      </svg>
    ),
  },
  {
    id: 'pay',
    label: 'Pay',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h20v12H2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 14h4" />
      </svg>
    ),
  },
  {
    id: 'transfer',
    label: 'Transfer',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5 5 5M7 13l5 5 5-5" />
      </svg>
    ),
  },
  {
    id: 'tng-card',
    label: 'TNG Card',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M6 15h3M13 15h5" />
        <circle cx="17" cy="10" r="2" />
      </svg>
    ),
  },
];

const services = [
  {
    id: 'carinsure',
    label: 'CarInsure',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0M9 17a2 2 0 10-4 0M9 17H6M19 17a2 2 0 11-4 0M19 17a2 2 0 10-4 0M19 17h-2M3 17V7a2 2 0 012-2h9l3 4h2a2 2 0 012 2v6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5v4h5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6" />
      </svg>
    ),
    color: 'bg-blue-50',
  },
  {
    id: 'walletsafe',
    label: 'WalletSafe',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'bg-blue-50',
  },
  {
    id: 'goinvest',
    label: 'GOinvest',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'bg-blue-50',
  },
  {
    id: 'tealive',
    label: 'Tealive',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M7 4h10l-1.5 16h-7L7 4z" stroke="#0052CC" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 4h12" stroke="#0052CC" strokeLinecap="round" />
        <path d="M17 8h2a2 2 0 010 4h-1.5" stroke="#0052CC" strokeLinecap="round" strokeLinejoin="round" />
        <text x="9" y="14" fontSize="6" fill="#0052CC" fontWeight="bold" fontFamily="sans-serif">tea</text>
      </svg>
    ),
    color: 'bg-green-50',
  },
  {
    id: 'toll',
    label: 'Toll',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <rect x="4" y="6" width="16" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6V4M16 6V4" />
        <circle cx="12" cy="15" r="1.5" fill="#FFCC00" stroke="#FFCC00" />
      </svg>
    ),
    color: 'bg-amber-50',
  },
  {
    id: 'parking',
    label: 'Parking',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" strokeLinecap="round" />
        <path d="M9 16V8h4a3 3 0 010 6H9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: 'bg-blue-50',
  },
  {
    id: 'rfid',
    label: 'RFID',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
    color: 'bg-purple-50',
  },
  {
    id: 'shell',
    label: 'Shell',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#0052CC" strokeWidth="1.5" />
        <path d="M12 3C12 3 8 8 8 12s4 9 4 9M12 3c0 0 4 5 4 9s-4 9-4 9" stroke="#FFCC00" strokeWidth="1.2" fill="none" />
        <path d="M12 3v18" stroke="#DD1D21" strokeWidth="1.2" />
      </svg>
    ),
    color: 'bg-yellow-50',
  },
  {
    id: 'a-rewards',
    label: 'A+ Rewards',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" stroke="#0052CC" />
        <text x="8" y="16" fontSize="10" fill="#0052CC" fontWeight="bold" fontFamily="sans-serif">A+</text>
      </svg>
    ),
    color: 'bg-cyan-50',
  },
  {
    id: 'bills',
    label: 'Bills',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6M9 8h.01M15 14h.01M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16l-3-2-2 2-2-2-2 2-2-2-3 2z" />
      </svg>
    ),
    color: 'bg-green-50',
  },
  {
    id: 'maxis',
    label: 'Maxis',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M3 16c2-6 5-9 9-9s7 3 9 9" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 13c3-5 6-7 9-7s6 2 9 7" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    color: 'bg-green-50',
  },
  {
    id: 'more',
    label: 'More',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
        <circle cx="7" cy="12" r="2" fill="#0052CC" />
        <circle cx="12" cy="12" r="2" fill="#0052CC" />
        <circle cx="17" cy="12" r="2" fill="#0052CC" />
        <circle cx="7" cy="7" r="2" fill="#0052CC" opacity="0.5" />
        <circle cx="12" cy="7" r="2" fill="#0052CC" opacity="0.5" />
        <circle cx="17" cy="7" r="2" fill="#0052CC" opacity="0.5" />
      </svg>
    ),
    color: 'bg-blue-50',
  },
];

const highlights = [
  {
    id: 1,
    image: '/promo1.png',
    alt: 'Upgrade your account to get 2.75% daily return',
  },
  {
    id: 2,
    image: '/promo2.png',
    alt: 'Contactless Duit Raya? Transfer je!',
  },
  {
    id: 3,
    image: '/promo3.png',
    alt: 'Win RM10,000 cash prizes weekly',
  },
];

const navItems = [
  {
    id: 'home',
    label: 'Home',
    active: true,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    id: 'ai-help',
    label: 'AI Help',
    active: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m6 2v-2M4 9h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9zm3-4h10a2 2 0 012 2v2H5V7a2 2 0 012-2zM12 2v3" />
      </svg>
    ),
  },
  {
    id: 'deals',
    label: 'Deals',
    active: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    id: 'favourites',
    label: 'Favourites',
    active: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 'profile',
    label: 'Profile',
    active: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const mockTransactions = [
  { id: 1, date: 'Today, 2:30 PM', title: 'Transfer to John Doe', amount: '-RM 50.00', type: 'out' },
  { id: 2, date: 'Yesterday, 10:15 AM', title: 'Reload from Bank', amount: '+RM 200.00', type: 'in' },
  { id: 3, date: '23 Apr, 8:45 PM', title: 'Dinner at Murni', amount: '-RM 24.50', type: 'out' },
  { id: 4, date: '21 Apr, 1:00 PM', title: 'Received from Siti', amount: '+RM 15.00', type: 'in' },
];

// --- COMPONENTS ---

const Header = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);

  return (
    <div className="bg-primary relative pb-16">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <p className="text-white/80 text-sm font-medium tracking-wide">Total Assets</p>
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-amber-300 overflow-hidden border-2 border-white/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-amber-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          {/* Notification dot */}
          <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-primary flex items-center justify-center">
            <span className="text-white text-[6px] font-bold">!</span>
          </div>
        </div>
      </div>

      {/* Balance */}
      <div className="px-5 pb-3">
        <div className="flex items-center gap-2">
          <h1 className="text-white text-3xl font-bold tracking-tight">
            {balanceVisible ? 'RM 5,500.00' : 'RM ••••••'}
          </h1>
          <button
            onClick={() => setBalanceVisible(!balanceVisible)}
            className="flex items-center gap-1 transition-opacity hover:opacity-80"
          >
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </button>
          <svg className="w-4 h-4 text-white/60 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between px-5 pb-4">
        <button className="flex items-center gap-2 bg-white rounded-full px-5 py-2 text-primary font-semibold text-sm hover:bg-white/90 transition-all duration-200 active:scale-95 shadow-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Reload
        </button>
        <button className="flex items-center gap-1 text-white/90 text-sm font-medium hover:text-white transition-colors duration-200">
          Transaction history
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ActionGrid = () => {
  return (
    <div className="relative -mt-8 mx-4 z-10">
      <div className="bg-white rounded-2xl shadow-lg shadow-black/8 p-4">
        <div className="grid grid-cols-4 gap-2">
          {actions.map((action) => (
            <button
              key={action.id}
              id={`action-${action.id}`}
              className="flex flex-col items-center gap-2 py-3 rounded-xl hover:bg-primary-light transition-all duration-200 cursor-pointer group"
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                {action.icon}
              </div>
              <span className="text-xs font-medium text-text-primary">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const PromoCards = ({ onLiteModeToggle, onSavingsRouteToggle }) => {
  return (
    <div className="px-4 pt-6 pb-2">
      <div className="grid grid-cols-2 gap-3">
        {/* Savings Goal Card */}
        <div 
          onClick={onSavingsRouteToggle}
          className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-border/50"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-primary">Savings Goal</h3>
              <p className="text-[11px] text-text-secondary mt-0.5 leading-tight">Map your route</p>
            </div>
          </div>
        </div>

        {/* GOrewards Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-border/50">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-primary">GOrewards</h3>
              <p className="text-[11px] text-text-secondary mt-0.5 leading-tight">Collect points and redeem rewards</p>
            </div>
          </div>
        </div>

        {/* Lite Mode Button replacing eShop */}
        <div
          onClick={onLiteModeToggle}
          className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-border/50"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-primary">Lite Mode</h3>
              <p className="text-[11px] text-text-secondary mt-0.5 leading-tight">Simple view</p>
            </div>
          </div>
        </div>

        {/* Start Collecting Points Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-border/50 flex items-center justify-center">
          <button className="text-primary text-xs font-bold border-2 border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white transition-all duration-200 active:scale-95 whitespace-nowrap">
            Start Collecting Points
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <div className="px-4 py-5">
      <div className="grid grid-cols-4 gap-x-2 gap-y-5">
        {services.map((service) => (
          <button
            key={service.id}
            id={`service-${service.id}`}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200 group-hover:shadow-md`}>
              {service.icon}
            </div>
            <span className="text-[11px] font-medium text-text-secondary text-center leading-tight">
              {service.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

const HighlightsCarousel = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.firstChild?.offsetWidth || 280;
      const gap = 12;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mt-4">
      {/* Yellow Header */}
      <div className="bg-accent-yellow rounded-t-3xl px-5 pt-5 pb-4">
        <h2 className="text-lg font-bold text-text-primary">Highlights</h2>
      </div>

      {/* Carousel */}
      <div className="bg-accent-yellow px-4 pb-6">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {highlights.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[75%] sm:w-[60%] md:w-[45%] snap-start cursor-pointer group"
            >
              <div className="rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2">
          {highlights.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                  ? 'w-6 bg-text-primary'
                  : 'w-1.5 bg-text-primary/30'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const BottomNav = ({ onAiHelpToggle }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border/50 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-around py-2 px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            id={`nav-${item.id}`}
            onClick={item.id === 'ai-help' ? onAiHelpToggle : undefined}
            className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors duration-200 ${item.active
                ? 'text-primary'
                : 'text-text-secondary hover:text-primary'
              }`}
          >
            {item.icon}
            <span className={`text-[10px] font-medium ${item.active ? 'font-semibold' : ''}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
      {/* Safe area for iPhone home indicator */}
      <div className="h-[env(safe-area-inset-bottom,0px)]" />
    </nav>
  );
};


// --- MAIN APP COMPONENT ---

function App() {
  const [isLiteMode, setIsLiteMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [isSavingsRouteOpen, setIsSavingsRouteOpen] = useState(false);
  const [isRecalculating, setIsRecalculating] = useState(false);
  const [routeStep, setRouteStep] = useState('setup');
  const [hasOverspent, setHasOverspent] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isSavingsRouteOpen && routeStep === 'navigating') {
      const timer = setTimeout(() => setProgress(10), 300);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [isSavingsRouteOpen, routeStep]);

  const handleSimulateOverspend = () => {
    setIsRecalculating(true);
    setTimeout(() => {
      setIsRecalculating(false);
      setHasOverspent(true);
    }, 2000);
  };

  const handleLiteModeToggle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLiteMode(true);
    }, 1200);
  };

  const handleReturnToNormal = () => {
    setIsLiteMode(false);
  }

  // --- RENDERS ---

  if (isSavingsRouteOpen) {
    return (
      <div className="min-h-screen bg-primary-light flex flex-col max-w-[1200px] mx-auto pb-[env(safe-area-inset-bottom,0px)]">
        {/* Header */}
        <div className="flex items-center px-4 pt-6 pb-4 bg-primary shadow-sm z-20">
          <button onClick={() => { setIsSavingsRouteOpen(false); setRouteStep('setup'); setHasOverspent(false); }} className="mr-3 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-white">Savings Goal</h1>
        </div>

        {isRecalculating && (
          <div className="bg-slate-800 text-white p-4 flex items-center justify-center gap-3 animate-pulse z-10">
            <svg className="w-6 h-6 animate-spin text-amber-400" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="font-medium text-sm">Overspend detected (RM 150). Adjusting forecast...</span>
          </div>
        )}

        {!isRecalculating && hasOverspent && (
          <div className="bg-amber-100 text-amber-900 p-4 border-b border-amber-200 z-10">
            <span className="font-bold text-sm block mb-1">Forecast adjusted.</span>
            <span className="text-sm">Target increased to RM 12/day to stay on track.</span>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 z-0">
          {routeStep === 'setup' ? (
            <div className="bg-white rounded-3xl p-6 shadow-sm mt-4">
              <h2 className="text-2xl font-bold text-text-primary mb-6">What are we saving for?</h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Goal Name</label>
                  <input type="text" placeholder="e.g. Japan Trip" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Target Amount (RM)</label>
                  <input type="number" placeholder="5000" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
              </div>

              <button 
                onClick={() => setRouteStep('navigating')}
                className="w-full bg-primary text-white font-bold text-lg py-4 rounded-full hover:bg-primary-dark transition-colors active:scale-95 shadow-md"
              >
                Start Saving Goal
              </button>
            </div>
          ) : (
            <div className="space-y-6 mt-2">
              {/* Dashboard Card with Progress */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-primary/10 relative overflow-hidden">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-1">Japan Trip</h2>
                    <div className="flex items-center text-text-secondary text-sm">
                      <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Target: Dec 2026
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary font-medium mb-1">Saved so far</div>
                    <div className="text-2xl font-black text-text-primary">RM 500</div>
                    <div className="text-xs text-text-secondary mt-1">of RM 5,000</div>
                  </div>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden relative">
                  <div 
                    className="bg-success h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
                <div className="flex justify-between text-xs text-text-secondary font-medium px-1">
                  <span>0%</span>
                  <span>{progress}%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Milestones Section */}
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="font-bold text-text-primary text-lg mb-4">Milestones</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 text-success">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">Started Journey</h4>
                      <p className="text-xs text-text-secondary mt-0.5">ASB Account Linked</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 opacity-100">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary border-2 border-primary/20 shadow-sm animate-pulse">
                      <span className="font-bold text-sm">1K</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-primary">Next Milestone</h4>
                      <p className="text-xs text-text-secondary mt-0.5">Save <span className="font-bold text-text-primary">RM 10/day</span> to reach by August</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 opacity-40">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500">
                      <span className="font-bold text-sm">5K</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">Goal Reached!</h4>
                      <p className="text-xs text-text-secondary mt-0.5">Japan Trip Unlocked</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Recommendations */}
              <div className="space-y-3">
                <h3 className="font-bold text-text-secondary px-2 text-sm uppercase tracking-wider">AI Recommendations</h3>
                
                <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-3 border-l-4 border-success">
                  <div className="bg-green-50 p-2 rounded-xl flex-shrink-0 self-start">
                    <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">Aggressive Growth</h4>
                    <p className="text-xs text-text-secondary mt-1">ASB Financing + RM500/month.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-3 border-l-4 border-blue-400">
                  <div className="bg-blue-50 p-2 rounded-xl flex-shrink-0 self-start">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">Steady & Safe</h4>
                    <p className="text-xs text-text-secondary mt-1">Low-Risk Savings Account + RM200/month.</p>
                  </div>
                </div>
              </div>

              {/* Overspend Simulator */}
              <button 
                onClick={handleSimulateOverspend}
                disabled={isRecalculating || hasOverspent}
                className={`w-full mt-4 py-4 rounded-2xl font-bold text-sm transition-all shadow-sm ${isRecalculating || hasOverspent ? 'bg-gray-200 text-gray-400' : 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 active:scale-95'}`}
              >
                Simulate Overspend
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (isAiChatOpen) {
    return (
      <div className="min-h-screen bg-white flex flex-col max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center px-4 pt-6 pb-4 bg-primary shadow-sm border-b border-primary/20">
          <button onClick={() => setIsAiChatOpen(false)} className="mr-3 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-white">AI Security & Help</h1>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          <div className="flex justify-end">
            <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-sm max-w-[80%]">
              <p className="text-base">Transfer RM 100 to John Cena</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 text-text-primary p-3 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm">
              <p className="text-base">I can help with that. Please confirm the transfer of RM 100 to John Cena.</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-red-50 border border-red-200 text-red-900 p-3 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="font-bold text-red-700">Security Alert</span>
              </div>
              <p className="text-base">I analyzed the image. That account number has been flagged for scams. Do not proceed.</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white p-4 pb-8 flex items-center gap-3">
          <button className="text-text-secondary hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <button className="text-text-secondary hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <div className="flex-1">
            <input type="text" placeholder="Message AI Assistant..." className="w-full bg-gray-100 rounded-full px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-primary/20" />
          </div>
          <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary-light flex flex-col items-center justify-center max-w-[1200px] mx-auto">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-primary font-bold text-lg animate-pulse">Switching to Lite Mode...</p>
      </div>
    );
  }

  if (isLiteMode) {
    return (
      <div className="min-h-screen bg-primary-light">
        <div className="max-w-[1200px] mx-auto relative">
          <Header />

          {/* Floating Action Grid (Lite Version) */}
          <div className="relative -mt-8 mx-4 z-10">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    id: 'scan',
                    label: 'Scan',
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M3 17v2a2 2 0 002 2h2M17 21h2a2 2 0 002-2v-2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h2v8H7zM15 8h2v8h-2z" />
                      </svg>
                    )
                  },
                  {
                    id: 'pay',
                    label: 'Pay',
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h20v12H2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 14h4" />
                      </svg>
                    )
                  },
                  {
                    id: 'transfer',
                    label: 'Transfer',
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5 5 5M7 13l5 5 5-5" />
                      </svg>
                    )
                  },
                  {
                    id: 'ai-shield',
                    label: 'AI Shield',
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )
                  },
                  {
                    id: 'exit',
                    label: 'Exit Lite View',
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )
                  }
                ].map((action) => (
                  <button 
                    key={action.id} 
                    onClick={action.id === 'exit' ? handleReturnToNormal : undefined}
                    className={`flex flex-col items-center justify-center gap-3 py-6 bg-white border-2 border-primary/10 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer shadow-sm ${action.id === 'exit' ? 'col-span-2 bg-red-50 border-red-100 hover:bg-red-100' : ''}`}
                  >
                    <div className={action.id === 'exit' ? 'text-red-500' : 'text-primary'}>{action.icon}</div>
                    <span className={`text-lg font-bold ${action.id === 'exit' ? 'text-red-600' : 'text-text-primary'}`}>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions (Lite Version) */}
          <div className="bg-white rounded-2xl mx-4 mt-6 p-4 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
            <div className="space-y-0">
              {mockTransactions.map((tx) => (
                <div key={tx.id} className="py-4 border-b border-gray-100 last:border-0 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-text-primary mb-0.5">{tx.title}</p>
                    <p className="text-sm text-text-secondary">{tx.date}</p>
                  </div>
                  <p className={`text-xl font-bold ${tx.type === 'in' ? 'text-success' : 'text-text-primary'}`}>
                    {tx.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-24" />
        </div>

        <BottomNav onAiHelpToggle={() => setIsAiChatOpen(true)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-light">
      <div className="max-w-[1200px] mx-auto relative">
        <Header />
        <ActionGrid />
        <PromoCards 
          onLiteModeToggle={handleLiteModeToggle} 
          onSavingsRouteToggle={() => setIsSavingsRouteOpen(true)}
        />
        <ServicesGrid />
        <HighlightsCarousel />
        <div className="h-20" />
      </div>
      <BottomNav onAiHelpToggle={() => setIsAiChatOpen(true)} />
    </div>
  );
}

export default App;
