import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Nextjs Project",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto h-(calc(100vh-3rem)) flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
