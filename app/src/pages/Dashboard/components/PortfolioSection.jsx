import { Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      gap={16}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        md: "row",
      }}
      gap={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        gap={{
          base: "1",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={IoIosInformationCircleOutline} />
          </HStack>
          <Text textStyle="h2">₹12,13,40.00</Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            gap="6"
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2">₹22,11,23.00</Text>
              <Tag.Root>
                <Tag.Label>BTCs</Tag.Label>
              </Tag.Root>
            </HStack>
            <HStack>
              <Text textStyle="h2">12,42,55.00</Text>
              <Tag.Root>
                <Tag.Label>BTCs</Tag.Label>
              </Tag.Root>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button>
          <Icon as={FaCaretDown} mr="1" />
          Deposit
        </Button>
        <Button>
          <Icon as={FaCaretUp} mr="1" />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
