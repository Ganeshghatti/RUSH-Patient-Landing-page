import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "RUSHDR Patient Login",
  description:
    "The One and Only Support System for Health – by Doctors, for Patients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-primary antialiased`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
