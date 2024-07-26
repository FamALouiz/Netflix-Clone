import { useState } from "react";
import TextInputProp from "./TextInputProp";

export default function TextInput(params: TextInputProp) {
  const { placeHolder, type, onChange } = params;
  const [content, setContent] = useState<string>("");
  return (
    <div className="flex justify-center py-2">
      <input
        id={placeHolder}
        type={type}
        onChange={(e) => {
          setContent(e.target.value);
          onChange(e.target.value);
        }}
        placeholder=" "
        className="rounded-sm 
        h-14 w-4/5 
        font-sans
        bg-zinc-900 
        text-white border-2 
        focus:outline-none 
        focus:ring-0 
        px-7 
        text-sm
        peer"
      />
      {!content && (
        <label
          htmlFor={placeHolder}
          className="
        absolute
        justify-start
        -translate-x-60     
        text-gray-600
        self-center
        duration-150
        transform
        origin-[0]
        peer-focus:-translate-y-4
        peer-focus:scale-50"
        >
          {placeHolder}
        </label>
      )}
    </div>
  );
}
