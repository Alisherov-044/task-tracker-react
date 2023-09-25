import { InputInterface } from "../../interface";

export function Input({
  placeholder,
  name,
  register,
  type = "text",
}: InputInterface) {
  return (
    <input
      className="input"
      name={name}
      type={type}
      placeholder={placeholder}
      {...register}
    />
  );
}
