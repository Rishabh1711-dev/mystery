"use client";

// --- React and Next.js Imports ---
import { useState } from "react";
import Link from "next/link";

// --- NextAuth Imports ---
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";

// --- UI Component Imports ---
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";

/**
 * Main Navbar Component
 */
export function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const user: User | undefined = session?.user;

  const navItems = [
    { name: "My Confessions", link: "/confessions" },
    { name: "Responses", link: "/responses" },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo/>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {session && user ? (
              <>
                <span className="hidden text-sm font-medium text-neutral-700 dark:text-neutral-300 md:block">
                  Welcome, {user.name || user.email}
                </span>
                <NavbarButton variant="secondary" onClick={() => signOut()}>
                  Logout
                </NavbarButton>
              </>
            ) : (
              <NavbarButton href="/sign-in" variant="primary">
                Login
              </NavbarButton>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo/>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-nav-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4">
              {session && user ? (
                <>
                  <p className="text-center text-sm">
                    Welcome, {user.name || user.email}
                  </p>
                  <NavbarButton
                    onClick={() => {
                      signOut();
                      setIsMobileMenuOpen(false);
                    }}
                    variant="secondary"
                    className="w-full"
                  >
                    Logout
                  </NavbarButton>
                </>
              ) : (
                <NavbarButton
                  href="/sign-in"
                  variant="secondary"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </NavbarButton>
              )}
              <NavbarButton
                href="/book-call"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
