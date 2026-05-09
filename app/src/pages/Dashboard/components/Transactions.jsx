import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { RiBtcFill } from "react-icons/ri";
import { Fragment } from "react";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: TbCoinRupeeFilled,
      text: "INR Deposit",
      amount: "+ ₹18,00,000",
      timestamp: "2025-04-16 07:06PM",
    },
    {
      id: "2",
      icon: RiBtcFill,
      text: "BTC Sell",
      amount: "- 12.00004123",
      timestamp: "2025-04-26 09:06PM",
    },
    {
      id: "3",
      icon: TbCoinRupeeFilled,
      text: "INR Deposit",
      amount: "+ ₹18,00,000",
      timestamp: "2025-04-16 07:06PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black">
        Recent Transactions
      </Text>
      <Stack>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Separator mt="4" />}
            <Flex gap="4" width="full">
              <Grid
                placeItems={"center"}
                bg="blackAlpha.50"
                boxSize={10}
                borderRadius={"full"}
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify={"space-between"} width="full">
                <Stack gap={0}>
                  <Text textStyle="h6" color="blackAlpha.800">
                    {transaction.text}
                  </Text>
                  <Text fontSize="sm" color="gray.400">
                    {transaction.timestamp}
                  </Text>
                </Stack>

                <Text textStyle="h6" color="blackAlpha.800">
                  {transaction.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button width="full" colorScheme="gray" mt="4">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
