import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Sidebar } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Edu IT",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="../assets/favicon.ico" type="image/x-icon" />
      <body className={poppins.className}>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className=" w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}