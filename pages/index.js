import React from "react";
import Hero from "@/sections/Hero";
import SignIn from "@/sections/SignIn";

const Index = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      {/* <div className="w-6/10 md:w-full">
        <Hero />
      </div>
      <div className="w-4/10 md:w-full">
        <SignIn />
      </div> */}
      <SignIn />
    </div>
  );
};

export default Index;
