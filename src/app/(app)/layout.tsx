import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <NavbarDemo/>
      <main className="flex-grow flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}