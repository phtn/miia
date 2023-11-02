import { Dispatch, SetStateAction } from "react";

function toggleState(setState: Dispatch<SetStateAction<boolean>>): void {
  setState((prevState) => !prevState)
}

export { toggleState }