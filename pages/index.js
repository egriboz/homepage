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
// import RavenVideo from "../components/RavenVideo";
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
          <svg width="32.5" height="32" viewBox="0 0 73 70" fill="currentColor" fillOpacity="0.0" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeWidth="1.0" d="M61.2819 31.8677H61.9039L61.7702 31.2603C60.2971 24.5683 56.3021 18.8402 50.8479 15.154C49.8591 14.4857 49.3574 13.307 49.6487 12.2051L51.0701 6.82759C51.4706 5.31256 53.1144 4.57557 54.4055 5.32752C65.2172 11.6241 72.5 23.4476 72.5 36.9978C72.5 38.7394 72.3799 40.452 72.1474 42.1279H61.2819H51.1793H38.725C37.0847 42.1279 35.8888 40.5748 36.308 38.9889L37.6986 33.7288C37.9886 32.6318 38.981 31.8677 40.1156 31.8677H61.2819ZM11.2298 31.2602L11.096 31.8677H11.7181H26.9949C28.6353 31.8677 29.8311 33.4208 29.4119 35.0067L28.0214 40.2668C27.7314 41.3638 26.7391 42.1279 25.6044 42.1279H11.7181H11.096L11.2298 42.7354C12.7476 49.6301 16.9423 55.5018 22.652 59.1712C23.6776 59.8303 24.2067 61.0319 23.9093 62.1568L22.4992 67.4911C22.1035 68.9882 20.4896 69.7308 19.1986 69.0121C8.05512 62.8088 0.5 50.7991 0.5 36.9978C0.5 16.8342 16.6241 0.5 36.4999 0.5C36.7792 0.5 37.0576 0.503222 37.3352 0.509629C38.801 0.543457 39.8168 1.97936 39.4244 3.46387L37.7382 9.84307C37.5961 10.3809 37.0881 10.7602 36.4999 10.7602C24.1406 10.7602 13.8113 19.5337 11.2298 31.2602Z"/>
          </svg>

          {/* {SiteConfig.author.shortName} */}
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
            <Raven />
            {/* <RavenVideo/> */}
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
              mt="30px"
              pl="5px"
              pr="5px"
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
            {SiteConfig.content}
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
