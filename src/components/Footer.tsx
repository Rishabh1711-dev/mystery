import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center p-4 md:p-6 bg-transparent text-gray-400">
      <div className="flex justify-center gap-4 mb-4">
        <Link href="/about" className="hover:text-white">About Us</Link>
        <Link href="/community-guidelines" className="hover:text-white">Community Guidelines</Link>
        <Link href="/contact" className="hover:text-white">Contact Us</Link>
      </div>
      <p>© 2025 Unspoken. All rights reserved.</p>
    </footer>
  );
}