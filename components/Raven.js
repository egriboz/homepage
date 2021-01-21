import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/react";
import NextImage from "next/image";

export function Raven() {
  const filterI = useColorModeValue("invert(0)", "invert(1)");

  return (
    <Image
      filter={filterI}
      src="/raven.gif"
      width="226px"
      height="264px"
      alt="Raven"
    />
  );
}
