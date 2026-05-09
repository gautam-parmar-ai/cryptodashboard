import {
  Button,
  HStack,
  Icon,
  Stack,
  Text,
  Card,
  Tag,
  Flex,
  Image,
  Tabs,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const PriceSection = () => {
  const timeStamps = ["7:15 PM", "7:55 PM", "8:15 PM", "8:55 PM", "9:00 PM"];

  return (
    <CustomCard>
      {" "}
      <Flex justifyContent="space-between" align="start">
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
              <Text textStyle="h2">22,11,23.00</Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={FaArrowTrendUp} />
                <Text fontSize="sm">23%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button>
            <Icon as={FiPlusCircle} mr="1" />
            Buy
          </Button>
          <Button>
            <Icon as={FiMinusCircle} mr="1" />
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs.Root
        defaultValue="1H"
        variant="plain"
        css={{
          "--tabs-indicator-bg": "colors.gray.subtle",
          "--tabs-indicator-shadow": "shadows.xs",
          "--tabs-trigger-radius": "radii.full",
        }}
      >
        <Flex justify="end">
          <Tabs.List bg="blackAlpha.50" p="3px">
            {["1H", "1D", "1W", "1M"].map((tabs) => (
              <Tabs.Trigger
                _selected={{
                  bg: "white",
                }}
                key={tabs}
                value={tabs}
                fontSize="sm"
                p="6px"
                borderRadius="4px"
              >
                {tabs}
              </Tabs.Trigger>
            ))}

            <Tabs.Indicator />
          </Tabs.List>
        </Flex>

        <Tabs.Content value="1H">
          <Image w="100%" src="/Graph.png" mt="48px" />
          <HStack justifyContent="space-between">
            {timeStamps.map((timestamp) => (
              <Text key={timestamp} fontSize="sm" color="black">
                {timestamp}
              </Text>
            ))}
          </HStack>
        </Tabs.Content>
        <Tabs.Content value="1D">
          Pura Nahi Banaya hai, Basic Functionality hai, Itna bhi Ghuss ke Mat
          Dekho
        </Tabs.Content>
      </Tabs.Root>
    </CustomCard>
  );
};

export default PriceSection;
