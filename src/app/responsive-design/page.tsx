import { CenterAllScreen } from "@/components/center-all-screen";

const Page = () => {
  return (
    <CenterAllScreen>
      <button className="after:content-['small'] sm:after:content-['small'] md:after:content-['medium'] lg:after:content-['large']"></button>
    </CenterAllScreen>
  );
};

export default Page;
