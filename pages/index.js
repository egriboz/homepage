import Head from "next/head";

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Grid,
  Avatar,
  Badge,
  Flex,
  Heading,
  GridItem,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import RavenVideo from "../components/RavenVideo";
import Raven from "../components/Raven";
import Socials from "../components/Socials";
import SiteConfig from "../site.config";
const AvatarImage =
  "https://cdn.dribbble.com/users/127500/avatars/normal/95abd06772238d31c5ed208db45aa2d5.jpg";

function Home() {
  return (
    <>
      <Head>
        <title>Home | {SiteConfig.author.name}</title>
      </Head>

      <Box
        zIndex="dropdown"
        justifySelf="flex-end"
        pos="absolute"
        top="10px"
        right="10px"
      >
        <ColorModeSwitcher />
      </Box>
      <Box pos="absolute" zIndex="dropdown">
        <Heading
          p="15px 0 0 15px"
          fontSize="1.1em"
          fontWeight="800"
          letterSpacing="2px"
          as="h1"
        >
          {SiteConfig.author.shortName}
        </Heading>
      </Box>
      <Grid
        h={{ sm: "auto", md: "100vh" }}
        templateRows={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={0}
      >
        <GridItem
          rowSpan={{ sm: "4", md: "4" }}
          colSpan={{ sm: "1", md: "2" }}
          borderRight="1px"
          className="border-color-mode-home-right"
          pos="relative"
        >
          <Flex align="center" height="100vh" justify="center">
            {/* <Raven /> */}
            <RavenVideo/>
          </Flex>
        </GridItem>
        <GridItem p="20px" rowSpan={{ sm: "1", md: "3" }}>
          <Flex
            align="flex-start"
            justify="center"
            direction="column"
            height="100%"
            p={{ sm: "0 0 60px", md: "0 0 0 0px" }}
          >
            <Text
              fontSize="5.5em"
              lineHeight="96px"
              fontWeight="700"
              maxW="12xl"
            >
              Say
            </Text>
            <Text
              fontSize="5.5em"
              lineHeight="96px"
              fontWeight="700"
              maxW="12xl"
            >
              Hello!
            </Text>
            <Link
              pt="30px"
              pl="5px"
              mb="30px"
              href={`mailto:${SiteConfig.author.email}`}
              isExternal
            >
              {SiteConfig.author.email}
            </Link>
          </Flex>
        </GridItem>
        <GridItem
          p="20px 20px 0px 20px"
          rowSpan={{ sm: "1", md: "1" }}
          borderTop="1px"
          className="border-color-mode-home-top"
        >
          <Flex pt="10px">
            <Avatar src={AvatarImage} />
            <Box ml="3">
              <Text fontWeight="bold">
                {SiteConfig.author.name}
                <Badge ml="1" colorScheme="green"></Badge>
              </Text>
              <Text fontSize="sm" align="left">
                {SiteConfig.author.title}
              </Text>
            </Box>
          </Flex>
          <Text
            mt="15px"
            pl="60px"
            pr="30px"
            fontSize="md"
            maxW="100%"
            lineHeight="normal"
          >
            I work and play with design and code in hopes of making the kids
            proud.
          </Text>
          <Socials
            p={{ base: "50px 0px 50px 10px", md: "30px 0px 5px 50px" }}
            twitter
            instagram
            github
            behance
            codepen
            envato
          />
        </GridItem>
      </Grid>
    </>
  );
}
export default Home;
