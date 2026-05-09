import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import SideNav from "./SideNav";

const SideDrawer = ({ open, setOpen }) => {
  return (
    <Drawer.Root
      open={open}
      placement="left"
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Portal>
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body>
              <SideNav />
            </Drawer.Body>

            <Drawer.CloseTrigger asChild>
              <CloseButton />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default SideDrawer;
