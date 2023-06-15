"use client";
import { CenterAllScreen } from "@/components/center-all-screen";
import { useState } from "react";

const Page = () => {
  const [state, setState] = useState<"small" | "medium" | "large">("small");

  return (
    <CenterAllScreen>
      <div className="flex flex-col">
        <button onClick={() => setState("small")}>small</button>
        <button onClick={() => setState("medium")}>medium</button>
        <button onClick={() => setState("large")}>large</button>
        <span
          data-size={state}
          className="data-[size=small]:text-sm data-[size=medium]:text-base data-[size=large]:text-lg"
        >
          size: {state}
        </span>
      </div>
    </CenterAllScreen>
  );
};

export default Page;
