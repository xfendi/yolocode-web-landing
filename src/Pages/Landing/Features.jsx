import React from "react";

const Features = () => {
  return (
    <div
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="features"
    >
      <div className="flex flex-col gap-10 items-center" data-aos="fade-up">
        <div className="bg-neutral-900 p-2 px-4 text-sm rounded-full w-max">
          Main Features
        </div>
        <div className="text-5xl sm:text-6xl text-white text-center">
          <span className="text-pink-400">Innovation</span> is central to our
          ethos.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-aos="fade-up">
        <div className="p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800 flex-1 flex flex-col gap-5 text-start">
          <h1 className="font-medium text-xl">
            Monitoring of sales with yolo websites
          </h1>
          <p className="text-neutral-300 text-md">
            Track and analyze your sales in real-time with YOLO Websites. Get
            insights on revenue, top products, and customer behavior—all in one
            intuitive dashboard.
          </p>
        </div>
        <div className="p-5 bg-neutral-900 rounded-3xl border-2 flex-1 border-neutral-800 flex flex-col gap-5 text-start">
          <h1 className="font-medium text-xl">
            Increase in website popularity since 2020
          </h1>
          <p className="text-neutral-300 text-md">
            Since 2020, website popularity has surged due to increased digital
            adoption, remote work, and e-commerce growth, driving higher traffic
            and engagement across various online platforms.
          </p>
        </div>

        <div className="p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800 flex-1 flex flex-col gap-5 text-start">
          <h1 className="font-medium text-xl">
            Optimize Your Online Presence with YOLO Code
          </h1>
          <p className="text-neutral-300 text-md">
            Enhance your website’s performance with cutting-edge tools from YOLO
            Code. Track user engagement, improve SEO, and maximize your digital
            reach effortlessly.
          </p>
        </div>
        <div className="p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800 flex-1 flex flex-col gap-5 text-start">
          <h1 className="font-medium text-xl">
            Smart Automation for Your Business Growth
          </h1>
          <p className="text-neutral-300 text-md">
            Streamline your workflows with YOLO Code’s intelligent automation
            solutions. Save time, boost productivity, and focus on what truly
            matters—growing your brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
