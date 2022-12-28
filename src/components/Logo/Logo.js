import { Image } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Image
          alignSelf="center"
          src="/image/logo.png"
          h={{ lg: "6vw", md: "8vw", base: "12vw" }}
          minW={{ md: "3rem" }}
        />
  );
};

export default Logo;
