import { Feature } from "@/types/feature";

const SingleFeature = ({ feature, index = 0 }: { feature: Feature; index?: number }) => {
  const { title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="group h-full rounded-lg border border-[#27272a] bg-[#0a0a0a] p-8 transition-colors duration-200 hover:border-[#52525b] hover:bg-[#111111]">
        <h3 className="mb-4 text-xl font-medium tracking-tight text-[#ededed]">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-[#a1a1aa]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
