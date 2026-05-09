import { Box, Container, Flex } from "@chakra-ui/react";
import { useState } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <SideNav />
        </Box>

        <SideDrawer open={open} setOpen={setOpen} />

        <Box flexGrow={1}>
          <TopNav title={title} onOpen={() => setOpen(true)} />

          <Container
            maxW="70rem"
            px="4"
            mt="6"
            overflowX="hidden"
            overflowY="auto"
            height="calc(100vh-80px)"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
