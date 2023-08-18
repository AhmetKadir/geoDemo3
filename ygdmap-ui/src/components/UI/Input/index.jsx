function Input({ type }) {
  return (
    // <div className="w-8 h-8 bg-white hover:bg-primaryDefault rounded-md justify-center items-center gap-3 inline-flex">
    <input type={type} className="overflow-hidden w-1" />
    // </div>
  );
}

export default Input;
