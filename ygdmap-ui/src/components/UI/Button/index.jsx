import { Icon } from "utils/icons";

function Button({
  children,
  text,
  iconName = "default",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 mt-2 bg-white hover:bg-primaryDefault rounded-md justify-center items-center gap-3 inline-flex"
    >
      <Icon name={iconName} size={24} />
      {children}
      {text}
    </button>
  );
}

export default Button;
