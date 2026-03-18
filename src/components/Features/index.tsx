import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import ScrollReveal from "../Common/ScrollReveal";

const Features = () => {
  return (
    <>
      <section id="features" className="bg-[#050505] py-16 md:py-20 lg:py-28">
        <div className="container">
          <ScrollReveal direction="up" duration={700}>
            <SectionTitle
              title="What we do"
              paragraph="We deliver end-to-end solutions — from intelligent automations and agentic workflows to modern websites and cutting-edge tech."
              center
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, i) => (
              <ScrollReveal key={feature.id} delay={i * 120} direction="up" duration={700}>
                <SingleFeature feature={feature} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
