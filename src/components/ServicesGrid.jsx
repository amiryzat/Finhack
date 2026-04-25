const services = [
  {
    id: 'carinsure',
    label: 'CarInsure',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0M9 17a2 2 0 10-4 0M9 17H6M19 17a2 2 0 11-4 0M19 17a2 2 0 10-4 0M19 17h-2M3 17V7a2 2 0 012-2h9l3 4h2a2 2 0 012 2v6"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5v4h5"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6"/>
      </svg>
    ),
    color: 'bg-blue-50',
  },
  {
    id: 'walletsafe',
    label: 'WalletSafe',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    color: 'bg-blue-50',
  },
  {
    id: 'goinvest',
    label: 'GOinvest',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
    color: 'bg-blue-50',
  },
  {
    id: 'tealive',
    label: 'Tealive',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M7 4h10l-1.5 16h-7L7 4z" stroke="#0052CC" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 4h12" stroke="#0052CC" strokeLinecap="round"/>
        <path d="M17 8h2a2 2 0 010 4h-1.5" stroke="#0052CC" strokeLinecap="round" strokeLinejoin="round"/>
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
        <rect x="4" y="6" width="16" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6V4M16 6V4"/>
        <circle cx="12" cy="15" r="1.5" fill="#FFCC00" stroke="#FFCC00"/>
      </svg>
    ),
    color: 'bg-amber-50',
  },
  {
    id: 'parking',
    label: 'Parking',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" strokeLinecap="round"/>
        <path d="M9 16V8h4a3 3 0 010 6H9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'bg-blue-50',
  },
  {
    id: 'rfid',
    label: 'RFID',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#0052CC" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0"/>
      </svg>
    ),
    color: 'bg-purple-50',
  },
  {
    id: 'shell',
    label: 'Shell',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#0052CC" strokeWidth="1.5"/>
        <path d="M12 3C12 3 8 8 8 12s4 9 4 9M12 3c0 0 4 5 4 9s-4 9-4 9" stroke="#FFCC00" strokeWidth="1.2" fill="none"/>
        <path d="M12 3v18" stroke="#DD1D21" strokeWidth="1.2"/>
      </svg>
    ),
    color: 'bg-yellow-50',
  },
  {
    id: 'a-rewards',
    label: 'A+ Rewards',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" stroke="#0052CC"/>
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6M9 8h.01M15 14h.01M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16l-3-2-2 2-2-2-2 2-2-2-3 2z"/>
      </svg>
    ),
    color: 'bg-green-50',
  },
  {
    id: 'maxis',
    label: 'Maxis',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M3 16c2-6 5-9 9-9s7 3 9 9" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M3 13c3-5 6-7 9-7s6 2 9 7" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    color: 'bg-green-50',
  },
  {
    id: 'more',
    label: 'More',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
        <circle cx="7" cy="12" r="2" fill="#0052CC"/>
        <circle cx="12" cy="12" r="2" fill="#0052CC"/>
        <circle cx="17" cy="12" r="2" fill="#0052CC"/>
        <circle cx="7" cy="7" r="2" fill="#0052CC" opacity="0.5"/>
        <circle cx="12" cy="7" r="2" fill="#0052CC" opacity="0.5"/>
        <circle cx="17" cy="7" r="2" fill="#0052CC" opacity="0.5"/>
      </svg>
    ),
    color: 'bg-blue-50',
  },
];

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

export default ServicesGrid;
