"use client";

const NewsLatterBox = () => {
  return (
    <div className="rounded-xl border border-[#27272a] bg-[#0a0a0a] p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-xl font-semibold text-[#ededed]">
        Stay Updated with Artisan Systems
      </h3>
      <p className="border-b border-[#27272a] pb-11 mb-11 text-base text-[#a1a1aa]">
        Subscribe to get the latest updates on our automation solutions, AI/ML
        research, and industry insights.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="mb-4 w-full rounded-md border border-[#27272a] bg-[#050505] px-6 py-3 text-base text-[#ededed] outline-none transition-colors duration-200 focus:border-[#52525b] focus:bg-[#0a0a0a]"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="mb-6 w-full rounded-md border border-[#27272a] bg-[#050505] px-6 py-3 text-base text-[#ededed] outline-none transition-colors duration-200 focus:border-[#52525b] focus:bg-[#0a0a0a]"
        />
        <input
          type="submit"
          value="Subscribe"
          className="mb-5 w-full cursor-pointer rounded-md bg-[#ededed] px-8 py-3.5 text-base font-medium text-[#050505] transition-colors duration-200 hover:bg-white"
        />
        <p className="text-center text-sm text-[#71717a]">
          No spam guaranteed, so please don&apos;t send any spam mail.
        </p>
      </div>
    </div>
  );
};

export default NewsLatterBox;
