function Alert({ type, title, message, isOpen }) {
  return (
    <div className="mx-auto w-full">
      <details
        className={`border rounded-lg open:shadow-lg transition ${
          type === "success"
            ? "open:text-white hover:text-white border-main-dark open:bg-main-dark hover:bg-main-dark text-main-dark"
            : "border-red-700 text-red-700"
        }`}
        open={isOpen}
      >
        <summary className="cursor-pointer text-lg leading-6 font-semibold select-none p-6">
          {title}
        </summary>
        <div
          className={`font-medium leading-7 px-6 pb-6 ${
            type === "success" ? "text-slate-200" : "text-gray-500"
          }`}
        >
          {message}
        </div>
      </details>
    </div>
  );
}

export default Alert;
