const ProgressCircle = ({ progress, color, title }: { progress: number; color: string; title: string }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-37.5 h-37.5">
      <svg
        className="w-full h-full -rotate-90"
        viewBox="0 0 100 100"
      >
        {/* الدائرة الخلفية */}
        <circle
            cx="50"
            cy="50"
            r={42}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset.toFixed(0)}
        />

        {/* الدائرة البرتقالية */}
       <circle
            cx="50"
            cy="50"
            r={42}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset.toFixed(0)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
        <span className={`${color === "#192060" ? "text-[#192060]" : `text-${color}-500`} text-[18px] font-semibold`}>
          {title}
        </span>
        <span className={`${color === "#192060" ? "text-[#192060]" : `text-${color}-500`} text-[16px] font-semibold`}>
          {progress.toFixed(0)}{color !== "green" ? "" : "%"}
        </span>
      </div>
    </div>
  );
};

export default ProgressCircle;