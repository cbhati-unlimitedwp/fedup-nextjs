import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titilliumweb = Titillium_Web ({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: '--titilliumweb',
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: "Discover Fresh Meal Prep: Our Delectable Healthy Menu",
  description: "Plan your healthy week now! Browse our delicious meal prep menus &amp; order today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="root" className={'${titilliumweb.variable} flex h-full flex-col'} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
