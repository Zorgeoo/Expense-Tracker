import { Inter } from "next/font/google";
import "./globals.css";
import { TransactionContextProvider } from "@/components/utils/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TransactionContextProvider>
        <body className={inter.className}>{children}</body>
      </TransactionContextProvider>
    </html>
  );
}
