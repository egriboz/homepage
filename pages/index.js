import Head from "next/head";
import NextLink from "next/link";

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
  Button,
  Code,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { Raven } from "../components/Raven";
import Socials from "../components/Socials";
import { withRouter } from "next/router";

function Home(router) {
  return (
    <>
      <Head>
        <title>Home page | Fatih Eğriboz</title>
      </Head>
      {/* ---- */}
      <Box
        zIndex="dropdown"
        justifySelf="flex-end"
        pos="absolute"
        top="10px"
        right="10px"
      >
        <ColorModeSwitcher />
      </Box>
      <Box pos="absolute">
        <Heading p="15px 0 0 30px" fontSize="1.5em" fontWeight="800" as="h1">
          FE
        </Heading>
      </Box>
      <Grid
        h={{ sm: "400px", md: "100vh" }}
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
            <Link pl="5px" href="mailto:egriboz@gmail.com" isExternal>
              egriboz@gmail.com
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
            <Avatar src="https://cdn.dribbble.com/users/127500/avatars/normal/95abd06772238d31c5ed208db45aa2d5.jpg" />
            <Box ml="3">
              <Text fontWeight="bold">
                Fatih Eğriboz
                <Badge ml="1" colorScheme="green"></Badge>
              </Text>
              <Text fontSize="sm" align="left">
                Frontend Developer
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
            p="30px 15px 5px 50px"
            twitter
            instagram
            github
            behance
            codepen
          />
        </GridItem>
      </Grid>
      {/* ---- */}
    </>
  );
}
export default Home;
