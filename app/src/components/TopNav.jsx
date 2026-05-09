import { Box, Container, Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import { Menu, Button, Code, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";

const TopNav = ({ title, onOpen }) => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <Box px="4" bg="white">
      <HStack h="16" justify="space-between" maxW="70rem" mx="auto">
        <Icon
          as={FaBars}
          onClick={() => {
            console.log("clicked bars");
            onOpen?.();
          }}
          display={{
            base: "flex",
            lg: "none",
          }}
        />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Menu.Trigger asChild>
            <Icon as={FaRegCircleUser} size="xl" />
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-txt" onClick={logout}>
                  Logout
                </Menu.Item>
                <Menu.Item value="new-file">Support</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </HStack>
    </Box>
  );
};

export default TopNav;
