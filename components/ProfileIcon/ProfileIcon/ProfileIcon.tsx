import { useRouter } from "next/navigation";
import ProfileIconProp from "../ProfileIconProp";

export default function ProfileIcon(props: ProfileIconProp) {
  const { firstName, lastName, color } = props;
  const router = useRouter();

  const handleOnClick = (e: any) => {
    router.push("/");
  };

  return (
    <div
      className="flex-col
      justify-center 
      aspect-square 
      h-44
      cursor-pointer
      group"
      onClick={handleOnClick}
    >
      <div
        className="flex 
      justify-center 
      items-center
      border-2
      border-opacity-0
      rounded-sm
      group-hover: border-white
      group-hover:border-opacity-100
      "
      >
        <img
          src="/images/profile-icon.jpg"
          className="rounded-sm"
          alt="Profile"
        />
      </div>
      <div className="flex justify-center pt-2">
        <label
          className="text-center 
        text-neutral-400 
        font-sans 
        text-2xl 
        w-5/6 
        h-5/6 
        truncate
        group-hover:text-white
        group-hover:cursor-pointer"
        >
          {firstName.charAt(0) + "."} {lastName}
        </label>
      </div>
    </div>
  );
}
