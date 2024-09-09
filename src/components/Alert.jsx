function Alert({ type, title, message, isOpen }) {
  return (
    <div className="mx-auto w-full">
      <details
        className={`border-2 rounded-lg open:shadow-lg transition open:text-white hover:text-white ${
          type === "success"
            ? "border-emerald-700 open:bg-emerald-600 hover:bg-emerald-600 text-emerald-700"
            : type === "error"
            ? "border-rose-800 open:bg-rose-700 hover:bg-rose-700 text-rose-800"
            : "border-amber-700 open:bg-amber-700 hover:bg-amber-700 text-amber-700"
        }`}
        open={isOpen}
      >
        <summary className="cursor-pointer text-lg leading-6 font-semibold select-none p-6">
          {title}
        </summary>
        <div className="font-medium leading-7 text-slate-200 px-6 pb-6">
          {message}
        </div>
      </details>
    </div>
  );
}

export default Alert;
