import React, { useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/react";
// import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Raven() {
  // const [data, dataSet] = React.useState([]);
  // const [dataLoading, dataLoadingSet] = React.useState(true);

  // useEffect(() => {
  //   const getImage = fetch("https://egriboz.com/assets/img/logo.gif");
  //   getImage.then((response) => {
  //     if (response.status == 200) {
  //       //console.log(response.status);
  //       dataSet(response.status);
  //       dataLoadingSet(false);
  //     }
  //   });
  // }, []);


  const filterImage = useColorModeValue("invert(0)", "invert(1)");

  return (
    <Box>
      <Image
        filter={filterImage}
        src="/raven.gif"
        width="226px"
        height="264px"
        alt="Raven"
      />
    </Box>
  );
}
