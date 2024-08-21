import React from "react";
import { Manual } from "chakra-docs";
import { loginManualData } from "./const";
export default function Home() {
  return (
    <div>
      <Manual manualData={loginManualData} />
    </div>
  );
}
