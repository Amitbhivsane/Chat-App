const AuthImagepattern = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center bg-base-200 px-4 py-6 sm:px-8 sm:py-12 w-full">
      <div className="w-full max-w-sm sm:max-w-md text-center">
        {/* Grid of animated squares */}
        <div className="grid grid-cols-3 gap-3 mb-6 sm:mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl sm:rounded-2xl bg-slate-400 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>

        {/* Text content */}
        <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h2>
        <p className="text-xs sm:text-base text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagepattern;
