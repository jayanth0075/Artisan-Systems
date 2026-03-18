import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="bg-[#050505] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-start">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[470px] lg:m-0">
              <SectionTitle
                title="How we work"
                paragraph="We don't just sell tools. We partner with you to understand your core operational bottlenecks, design deterministic systems, and implement intelligent automations that scale."
                mb="44px"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-6 rounded-lg border border-[#27272a] bg-[#0a0a0a] p-8 transition-colors duration-200 hover:border-[#52525b]">
                <h3 className="mb-2 text-xl font-medium tracking-tight text-[#ededed]">
                  Faisal Khan Pathan
                </h3>
                <p className="mb-4 text-sm font-medium text-[#71717a]">
                  Co-Founder & CEO
                </p>
                <p className="mb-4 text-base leading-relaxed text-[#a1a1aa]">
                  Faisal leads the vision and strategy at Artisan Systems, specializing in intelligent automation, AI solutions, robotic autonomous systems, and scalable architectures.
                </p>
                <div className="flex gap-4 text-sm text-[#71717a]">
                  <a href="mailto:faisal96kp@gmail.com" className="hover:text-[#ededed]">Email</a>
                  <a href="https://www.linkedin.com/in/faisal-khan-5a383a355/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ededed]">LinkedIn</a>
                </div>
              </div>

              <div className="mb-6 rounded-lg border border-[#27272a] bg-[#0a0a0a] p-8 transition-colors duration-200 hover:border-[#52525b]">
                <h3 className="mb-2 text-xl font-medium tracking-tight text-[#ededed]">
                  Jayanth Adavi
                </h3>
                <p className="mb-4 text-sm font-medium text-[#71717a]">
                  Co-Founder & CTO
                </p>
                <p className="mb-4 text-base leading-relaxed text-[#a1a1aa]">
                  Jayanth architects the technical backbone of Artisan Systems, specializing in agentic workflows, AI/ML research, and scalable systems.
                </p>
                <div className="flex gap-4 text-sm text-[#71717a]">
                  <a href="mailto:jayanthadavi@gmail.com" className="hover:text-[#ededed]">Email</a>
                  <a href="https://www.linkedin.com/in/adavi-jayanth-952a492ab/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ededed]">LinkedIn</a>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-transparent bg-[#111111] p-8">
                <h3 className="mb-2 text-xl font-medium tracking-tight text-[#ededed]">
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed text-[#a1a1aa]">
                  To empower businesses of all sizes with intelligent, scalable, and affordable technology solutions that unlock growth and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
