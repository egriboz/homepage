import React, { useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/react";

export default function Raven() {
  const filterImage = useColorModeValue("invert(0)", "invert(1)");
  // onContextMenu={(e) => e.preventDefault()}
  return (
    <Box filter={filterImage}>
      <video autoPlay loop muted>
        <source src="/raven.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}
