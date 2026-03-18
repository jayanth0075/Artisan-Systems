"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => setSticky(window.scrollY >= 80);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  });

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  const currentPath = usePathname();

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center transition-all duration-500 ${
        sticky
          ? "fixed z-[9999] border-b border-[#27272a] bg-[#050505]/90 backdrop-blur-xl"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="shrink-0">
            <Link
              href="/"
              className={`header-logo flex items-center gap-3 transition-all ${
                sticky ? "py-4 lg:py-3" : "py-8"
              }`}
            >
              <Image
                src="/images/logo/Artisan_logo.jpg"
                alt="Artisan Systems"
                width={40}
                height={40}
                className="h-10 w-10 rounded object-cover"
              />
              <span className="text-xl font-medium tracking-tight text-[#ededed]">
                ArtisanSystems
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg p-2 focus:ring-2 focus:ring-[#52525b] lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[26px] bg-[#ededed] transition-all duration-300 ${
                  navbarOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[26px] bg-[#ededed] transition-all duration-300 ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[26px] bg-[#ededed] transition-all duration-300 ${
                  navbarOpen ? "top-[-8px] -rotate-45" : ""
                }`}
              />
            </button>

            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 w-[250px] rounded-lg border border-[#27272a] bg-[#0a0a0a] px-6 py-4 shadow-lg duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:items-center lg:gap-10">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`flex py-2 text-sm font-medium tracking-wide transition-colors duration-200 lg:inline-flex lg:py-6 ${
                          currentPath === menuItem.path
                            ? "text-[#ededed]"
                            : "text-[#a1a1aa] hover:text-[#ededed]"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="flex cursor-pointer items-center gap-1 py-2 text-sm font-medium tracking-wide text-[#a1a1aa] transition-colors duration-200 group-hover:text-[#ededed] lg:inline-flex lg:py-6"
                        >
                          {menuItem.title}
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 25 24"
                            className="transition-transform duration-200 group-hover:rotate-180"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </p>
                        <div
                          className={`submenu relative top-full left-0 rounded-lg border border-[#27272a] bg-[#0a0a0a] transition-all duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[230px] lg:p-3 lg:opacity-0 lg:shadow-xl lg:group-hover:visible lg:group-hover:top-full ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu?.map((submenuItem, i) => (
                            <Link
                              href={submenuItem.path}
                              key={i}
                              className="block rounded-md px-4 py-2.5 text-sm font-medium text-[#a1a1aa] transition-all duration-200 hover:bg-[#18181b] hover:text-[#ededed]"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3 pr-14 lg:pr-0">
              <Link
                href="/contact"
                className="hidden rounded-md bg-[#ededed] px-6 py-2.5 text-sm font-medium text-[#050505] transition-colors duration-200 hover:bg-white md:inline-flex"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
