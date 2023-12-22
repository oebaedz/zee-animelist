import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "ZeeAnimeList",
  description: "Created by Zbad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <div className="px-20 lg:px-40 xl:px-60">{children}</div>
      </body>
    </html>
  );
}
