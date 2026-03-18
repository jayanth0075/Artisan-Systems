"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-[#27272a] bg-[#050505] pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="flex flex-wrap gap-y-12 lg:gap-y-0">
          <div className="w-full lg:w-5/12">
            <div className="mb-12 max-w-[380px] lg:mb-16">
              <Link href="/" className="mb-8 inline-flex items-center gap-3">
                <Image
                  src="/images/logo/Artisan_logo.jpg"
                  alt="Artisan Systems"
                  className="h-10 w-10 rounded object-cover"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-medium tracking-tight text-[#ededed]">
                  ArtisanSystems
                </span>
              </Link>
              <p className="mb-8 text-base leading-relaxed text-[#a1a1aa]">
                Building intelligent automations, agentic workflows, and
                AI-powered solutions that help businesses scale smarter.
              </p>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#71717a]">
                Follow us
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/artisansystems/posts/?feedView=all"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]"
                >
                  LinkedIn
                </a>
                <span className="text-[#27272a]">|</span>
                <a
                  href="https://x.com/ArtisanSystems"
                  aria-label="X (Twitter)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]"
                >
                  Twitter (X)
                </a>
              </div>
            </div>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h3 className="mb-6 text-sm font-medium text-[#ededed]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h3 className="mb-6 text-sm font-medium text-[#ededed]">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#features" className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]">
                    Intelligent Automations
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]">
                    Agentic Workflows
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]">
                    AI/ML Research
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h3 className="mb-6 text-sm font-medium text-[#ededed]">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-[#ededed]">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#27272a] py-8">
          <p className="text-sm text-[#71717a]">
            &copy; {new Date().getFullYear()} Artisan Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
