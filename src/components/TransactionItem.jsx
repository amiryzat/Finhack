const TransactionItem = ({ icon, iconBg, name, subtitle, amount, isIncoming, onClick }) => {
  const formattedAmount = isIncoming
    ? `+ RM ${Math.abs(amount).toFixed(2)}`
    : `- RM ${Math.abs(amount).toFixed(2)}`;

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3.5 px-4 py-3.5 hover:bg-gray-50/80 transition-colors duration-150 cursor-pointer rounded-xl group"
    >
      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg} group-hover:scale-105 transition-transform duration-200`}
      >
        {icon}
      </div>

      {/* Name & Subtitle */}
      <div className="flex-1 min-w-0 text-left">
        <p className="text-[14px] font-semibold text-text-primary truncate leading-tight">
          {name}
        </p>
        <p className="text-[12px] text-text-secondary mt-0.5 truncate leading-tight">
          {subtitle}
        </p>
      </div>

      {/* Amount */}
      <span
        className={`text-[14px] font-semibold whitespace-nowrap ${
          isIncoming ? 'text-success' : 'text-text-primary'
        }`}
      >
        {formattedAmount}
      </span>
    </button>
  );
};

export default TransactionItem;
