import { createContext, useContext } from "react";

type KeyboardContextType = {
  isKeyboardVisible: boolean;
};

const KeyboardContext = createContext<KeyboardContextType>({
  isKeyboardVisible: false,
});

function useKeyboardContext() {
  const context = useContext(KeyboardContext);
  if (!context) {
    throw new Error(
      "KeyboardContext.* component must br rendered as child of Keyboard component"
    );
  }
  return context;
}

export { KeyboardContext, useKeyboardContext };
