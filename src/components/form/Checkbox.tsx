import { CheckboxInterface } from "../../interface";

export function Checkbox({ id, label, name, register }: CheckboxInterface) {
  return (
    <div className="input__wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        className="checkbox"
        type="checkbox"
        name={name}
        id={id}
        {...register}
      />
    </div>
  );
}
