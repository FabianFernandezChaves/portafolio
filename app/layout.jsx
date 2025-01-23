import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], 
  style: ["normal", "italic"], 
});

export const metadata = {
  title: "Portfolio",
  description: "Fabián Fernández Chaves Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} px-2 md:px-8 antialiased min-h-screen grid content-between`}
      >
        {children}
      </body>
    </html>
  );
}
