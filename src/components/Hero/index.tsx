import Link from "next/link";
import ScrollReveal from "../Common/ScrollReveal";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[#050505] pb-16 pt-[120px] md:pb-[120px] md:pt-[180px] xl:pb-[160px] xl:pt-[220px]"
      >
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <ScrollReveal delay={0} direction="up" duration={700}>
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#ededed] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.1]">
                Intelligent Systems for <br className="hidden sm:block" />
                Modern Operations
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150} direction="up" duration={700}>
              <p className="mx-auto mb-10 max-w-[600px] text-base leading-relaxed text-[#a1a1aa] sm:text-lg md:text-xl md:leading-relaxed">
                We build powerful automations, agentic workflows, and robust technical infrastructure to help your business scale with absolute clarity and control.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300} direction="up" duration={700}>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#ededed] px-8 py-3.5 text-base font-medium text-[#050505] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white"
                >
                  Talk to us
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md border border-[#27272a] bg-transparent px-8 py-3.5 text-base font-medium text-[#ededed] transition-colors duration-200 hover:bg-[#18181b] hover:border-[#3f3f46]"
                >
                  Explore solutions
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
