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
        <body className={inter.className}>
          <Navbar></Navbar>
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
