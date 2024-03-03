import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Hero, Navbar } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <head>
        <link
          rel="apple-touch-icon"
          href="./apple-icon.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={poppins.className}>
        <div className="relative z-0 bg-primary">{children}</div>
      </body>
    </html>
  );
};
export default RootLayout;
