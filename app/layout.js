import { Inter } from "next/font/google";
import '@/styles/global.css';
import '@/styles/reset.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="font-sans antialiased text-gray-900 bg-white">
            <main>{children}</main>
        </body>
    </html>
  );
}
