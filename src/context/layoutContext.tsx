import { createContext, useContext, useState } from "react";
import { LayoutContextInterface, LayoutProviderInterface } from "../interface";

const initialValue: LayoutContextInterface = {
  showTaskForm: false,
  toggle: () => {},
};

const LayoutContext = createContext<LayoutContextInterface>(initialValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useLayoutContext = () => {
  return useContext(LayoutContext);
};

export const LayoutProvider = ({ children }: LayoutProviderInterface) => {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);

  const toggle = () => {
    setShowTaskForm((prev) => !prev);
  };

  return (
    <LayoutContext.Provider value={{ showTaskForm, toggle }}>
      {children}
    </LayoutContext.Provider>
  );
};
