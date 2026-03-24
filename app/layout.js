import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/lib/contexts/scrollWrapper";
import { NotificationProvider } from "@/lib/contexts/serviceContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinkTree | show yourself online",
  description:
    "In this platform a 10yrs kiddo can make their socialProfile, its easier than you think just tap create now",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ScrollProvider>
          <NotificationProvider >
           <Navbar /> 
          <div className="flex-1">{children}</div>
          <Footer /> 
          </NotificationProvider >
        </ScrollProvider>
      </body>
    </html>
  );
}
