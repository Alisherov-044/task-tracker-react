import { ButtonInterface } from "../../interface";

export function Button({ color, children, variant, onClick }: ButtonInterface) {
  return (
    <button
      className={`button ${variant || ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
