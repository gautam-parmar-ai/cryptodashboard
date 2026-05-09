import React from "react";
import { Button, Card, Flex, HStack, Icon, Tag, Text } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { FaDownload } from "react-icons/fa6";
import { Link, Tabs } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { Input, InputGroup } from "@chakra-ui/react";
import { FaSearchDollar } from "react-icons/fa";

const TransactionsPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 21,
    },
    {
      name: "Withdraw",
      count: "02",
    },
    {
      name: "Trade",
      count: 1997,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button>
          <Icon as={FaDownload}></Icon>Export CSV
        </Button>
      </Flex>
      <Card.Root borderRadius="1rem">
        <Card.Body>
          <Tabs.Root defaultValue="All">
            <Tabs.List
              pt="4"
              display="flex"
              width="full"
              justifyContent="space-between"
            >
              <HStack>
                {tabs.map((tab) => (
                  <Tabs.Trigger key={tab.name} value={tab.name} display="flex">
                    {tab.name}
                    <Tag.Root bg="brand.500" color="white" borderRadius="full">
                      <Tag.Label color="blackAlpha.400">{tab.count}</Tag.Label>
                    </Tag.Root>
                  </Tabs.Trigger>
                ))}
              </HStack>

              <InputGroup
                startElement={<FaSearchDollar />}
                maxWidth="200px"
                pr="2"
              >
                <Input placeholder="Search.." />
              </InputGroup>
            </Tabs.List>
            <Tabs.Content value="All">
              <TransactionTable />
            </Tabs.Content>
            <Tabs.Content value="Deposit">
              <TransactionTable />
            </Tabs.Content>
            <Tabs.Content value="Withdraw">
              <TransactionTable />
            </Tabs.Content>
            <Tabs.Content value="Trade">
              <Text>
                This is Just for Portfolio, not everything is completed over
                here
              </Text>
            </Tabs.Content>
          </Tabs.Root>
        </Card.Body>
      </Card.Root>
    </DashboardLayout>
  );
};

export default TransactionsPage;
