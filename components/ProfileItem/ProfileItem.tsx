import { useRouter } from "next/navigation";
import ProfileItemProp from "./ProfileItemProp";

export default function ProfileItem(props: ProfileItemProp) {
  const { firstName, lastName, color } = props;
  const router = useRouter();

  const handleOnClick = (e: any) => {
    router.push("/");
  };

  return (
    <div
      className="flex-col justify-center aspect-square h-44 cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="flex justify-center items-center">
        <img src="/images/profile-icon.jpg" className="w-5/6 h-5/6" />
      </div>
      <div className="flex justify-center pt-2">
        <label className="text-center text-white font-sans text-2xl w-5/6 h-5/6 truncate">
          {firstName.charAt(0) + "."} {lastName}
        </label>
      </div>
    </div>
  );
}
