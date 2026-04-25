const actions = [
  {
    id: 'scan',
    label: 'Scan',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M3 17v2a2 2 0 002 2h2M17 21h2a2 2 0 002-2v-2"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h10"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h2v8H7zM15 8h2v8h-2z"/>
      </svg>
    ),
  },
  {
    id: 'pay',
    label: 'Pay',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h20v12H2z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 14h4"/>
      </svg>
    ),
  },
  {
    id: 'transfer',
    label: 'Transfer',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5 5 5M7 13l5 5 5-5"/>
      </svg>
    ),
  },
  {
    id: 'tng-card',
    label: 'TNG Card',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M6 15h3M13 15h5"/>
        <circle cx="17" cy="10" r="2"/>
      </svg>
    ),
  },
];

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

export default ActionGrid;
