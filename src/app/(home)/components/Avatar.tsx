import React from "react";
import { Avatar as Picture } from "@radix-ui/themes";

const Avatar = () => {
  return (
    <div className="">
      <Picture src="/myself.png" fallback="A" size="8" radius="full" />
    </div>
  );
};

export default Avatar;
