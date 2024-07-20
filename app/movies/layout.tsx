import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies",
  description: "Watch your favorite movies",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
