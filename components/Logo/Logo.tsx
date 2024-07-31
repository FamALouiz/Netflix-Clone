import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <img
      src="/images/logo.png"
      className="w-32 h-8 mx-20 cursor-pointer"
      alt="Logo"
      onClick={() => router.push("/")}
    />
  );
}
