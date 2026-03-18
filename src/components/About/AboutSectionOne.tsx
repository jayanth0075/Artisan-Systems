import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-4 flex items-start text-lg font-medium text-[#a1a1aa]">
      <span className="mr-3 mt-1.5 flex h-2 w-2 flex-shrink-0 items-center justify-center rounded-full bg-[#52525b]">
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="bg-[#050505] pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-[#27272a] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Why Artisan"
                paragraph="We build reliable, scalable infrastructure that directly impacts your bottom line. No buzzwords, no black boxes—just clear, process-driven engineering."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Process First, Automation Second" />
                    <List text="Deterministic & Scalable Architecture" />
                    <List text="Deep Technical Expertise" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Transparent Engineering" />
                    <List text="Results-Driven Focus" />
                    <List text="Long-Term Partnership" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto flex max-w-[400px] items-center justify-center lg:mr-0">
                <div className="rounded-xl border border-[#27272a] bg-[#0a0a0a] p-10">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#ededed]">
                    Our Philosophy
                  </h3>
                  <p className="text-base leading-relaxed text-[#a1a1aa]">
                    We believe that AI and automation should be invisible engines powering your business. We prioritize reliability over hype, ensuring every system we deploy is secure, auditable, and built to last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
