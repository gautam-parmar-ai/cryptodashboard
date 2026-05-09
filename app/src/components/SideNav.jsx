import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import { Link, useLocation } from "react-router";

const SideNav = () => {
  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  };
  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
      bg="white"
    >
      <Box>
        <Heading
          textAlign="center"
          display="flex"
          fontSize="20px"
          gap="2"
          alignItems="center"
          as="h1"
          pt="56px"
          ml="4"
          pr="30px"
        >
          <ImLinkedin />
          Gautam Parmar
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                py="3"
                px="4"
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#e2e2e3"}
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} />
                <Text fontSize={"14px"} fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#e2e2e3"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize={"14px"} fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
