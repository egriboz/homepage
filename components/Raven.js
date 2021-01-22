import React, { useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/react";
// import Image from "next/image";
import { Box } from "@chakra-ui/react";

export function Raven() {
  const [data, dataSet] = React.useState([]);
  const [dataLoading, dataLoadingSet] = React.useState(true);

  useEffect(() => {
    const getImage = fetch("https://egriboz.com/assets/img/logo.gif");
    getImage.then((response) => {
      if (response.status == 200) {
        //console.log(response.status);
        dataSet(response.status);
        dataLoadingSet(false);
      }
    });
  }, []);

  // useEffect(() => {
  //   // async function getRavenImage() {
  //   //   const response = await fetch("https://egriboz.com/assets/img/logo.gif");
  //   //   const data = await response.json();
  //   //   //console.log(url);
  //   //   //dataSet(url.statuses);
  //   //   //dataLoadingSet(false);
  //   //   console.log(data);
  //   // }
  //   // getRavenImage();
  // }, []);

  const filterImage = useColorModeValue("invert(0)", "invert(1)");

  return (
    <Box>
      {console.log(dataLoading)}
      {dataLoading && <div>...</div>}
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
