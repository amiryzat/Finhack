import { useState } from 'react';

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
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
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
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </button>
          <svg className="w-4 h-4 text-white/60 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between px-5 pb-4">
        <button className="flex items-center gap-2 bg-white rounded-full px-5 py-2 text-primary font-semibold text-sm hover:bg-white/90 transition-all duration-200 active:scale-95 shadow-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          Reload
        </button>
        <button className="flex items-center gap-1 text-white/90 text-sm font-medium hover:text-white transition-colors duration-200">
          Transaction history
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
