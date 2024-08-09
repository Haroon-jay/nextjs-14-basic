import React from "react";
import { MY_NAME } from "@/lib/config";

const BuiltBy = ({ name = MY_NAME }: { name?: string }) => {
  return (
    <div className="text-white text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-2xl font-bold animate-fade-in">
      Built by{" "}
      <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-red-500">
        {name}
      </span>
    </div>
  );
};

export default BuiltBy;
