import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Hero, Navbar } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ahmed | Portfolio",
  description: "",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="relative z-0 bg-primary">{children}</div>
      </body>
    </html>
  );
};
export default RootLayout;
