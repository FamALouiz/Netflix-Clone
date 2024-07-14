import { Dispatch, SetStateAction } from "react";

interface TextInputProp {
  placeHolder: string;
  type: string;
  onChange: Dispatch<SetStateAction<any>>;
}

export default TextInputProp;
