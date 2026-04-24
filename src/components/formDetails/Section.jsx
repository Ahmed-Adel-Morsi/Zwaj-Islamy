function Section({ title, children, className = "", variant = "green" }) {
  return (
    <div
      className={`rounded-lg ${
        variant === "green" ? "bg-main" : "bg-orange-600"
      } bg-opacity-10 p-6 xs:p-8 sm:p-10 space-y-4 xs:space-y-6 sm:space-y-8 ${className}`}
    >
      {title && (
        <h3 className="font-bold text-[8vw] xs:text-3xl text-center">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

export default Section;
