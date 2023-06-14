import { CenterAllScreen } from "@/components/center-all-screen";

const Page = () => {
  return (
    <CenterAllScreen>
      <span className="after:content-['*'] after:text-red-500">email</span>
      <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
        <span className="relative text-white">annoyed</span>
      </span>
    </CenterAllScreen>
  );
};

export default Page;
