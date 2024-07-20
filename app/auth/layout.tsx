import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Authentication",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
