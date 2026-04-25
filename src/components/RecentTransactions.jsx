import TransactionItem from './TransactionItem';

const transactions = [
  {
    id: 'txn-1',
    name: 'Tealive',
    subtitle: 'Today, 2:45 PM',
    amount: 12.50,
    isIncoming: false,
    category: 'food',
  },
  {
    id: 'txn-2',
    name: 'Grab',
    subtitle: 'Today, 11:30 AM',
    amount: 18.90,
    isIncoming: false,
    category: 'transport',
  },
  {
    id: 'txn-3',
    name: 'Ali Bin Rahman',
    subtitle: 'Yesterday, 6:00 PM',
    amount: 50.00,
    isIncoming: false,
    category: 'transfer',
  },
  {
    id: 'txn-4',
    name: 'Salary',
    subtitle: 'Apr 24, 9:00 AM',
    amount: 2500.00,
    isIncoming: true,
    category: 'income',
  },
  {
    id: 'txn-5',
    name: 'Shell',
    subtitle: 'Apr 23, 3:15 PM',
    amount: 60.00,
    isIncoming: false,
    category: 'fuel',
  },
];

/* ─── Category → icon + background color mapping ─── */
const categoryConfig = {
  food: {
    bg: 'bg-amber-50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#D97706" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  transport: {
    bg: 'bg-emerald-50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#059669" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M13 6h3l4 5v5h-4M9 17H6" />
      </svg>
    ),
  },
  transfer: {
    bg: 'bg-blue-50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#2563EB" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  income: {
    bg: 'bg-green-50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#16A34A" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  fuel: {
    bg: 'bg-orange-50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#EA580C" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 4.499a6.5 6.5 0 006.362.715z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 003.75-3.75c0-2.072-1.678-3.78-3.75-5.25-2.072 1.47-3.75 3.178-3.75 5.25A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
};

const RecentTransactions = () => {
  const handleViewAll = () => {
    console.log('View All transactions clicked');
  };

  const handleTransactionClick = (txn) => {
    console.log('Transaction clicked:', txn.name, txn.amount);
  };

  return (
    <div className="px-4 py-5">
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-5 pb-2">
          <h2 className="text-[15px] font-semibold text-text-primary">
            Recent Transactions
          </h2>
          <button
            onClick={handleViewAll}
            className="text-[13px] font-medium text-primary hover:text-primary-dark transition-colors duration-150 cursor-pointer"
          >
            View All &gt;
          </button>
        </div>

        {/* Transaction List */}
        <div className="py-1">
          {transactions.map((txn, index) => {
            const config = categoryConfig[txn.category] || categoryConfig.transfer;
            return (
              <div key={txn.id}>
                <TransactionItem
                  icon={config.icon}
                  iconBg={config.bg}
                  name={txn.name}
                  subtitle={txn.subtitle}
                  amount={txn.amount}
                  isIncoming={txn.isIncoming}
                  onClick={() => handleTransactionClick(txn)}
                />
                {/* Subtle divider — skip on last item */}
                {index < transactions.length - 1 && (
                  <div className="mx-4 border-b border-gray-100" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
