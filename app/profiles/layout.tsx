import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Pick your profile",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
