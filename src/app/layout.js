import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReduxProvider from "@/provider/reduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAuthPro",
  description: "NextAuthPro",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body suppressHydrationWarning={true} className={inter.className}>
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
