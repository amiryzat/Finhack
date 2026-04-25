const PromoCards = () => {
  return (
    <div className="px-4 pt-6 pb-2">
      <div className="grid grid-cols-2 gap-3">
        {/* GO+ Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-border/50">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-primary">GO+</h3>
              <p className="text-[11px] text-text-secondary mt-0.5 leading-tight">Earn &gt;3.0%* returns</p>
            </div>
          </div>
        </div>

        {/* GOrewards Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-border/50">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-primary">GOrewards</h3>
              <p className="text-[11px] text-text-secondary mt-0.5 leading-tight">Collect points and redeem rewards</p>
            </div>
          </div>
        </div>

        {/* eShop Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-border/50">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 14H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v10z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-primary">eShop</h3>
              <p className="text-[11px] text-text-secondary mt-0.5 leading-tight">Get Vouchers</p>
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

export default PromoCards;
