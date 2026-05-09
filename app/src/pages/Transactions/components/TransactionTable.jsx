import React from "react";
import { Badge, Table } from "@chakra-ui/react";

const TransactionTable = () => {
  const items = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+₹81,000,00",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-19",
      time: "09:06 PM",
      type: {
        name: "Buy",
        tag: "",
      },
      amount: " + 13,000,00 BTC",
      status: "Cancelled",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-29",
      time: "10:06 PM",
      type: {
        name: "INR Withdraw",
        tag: "Wire transfer",
      },
      amount: "- ₹2,000,00",
      status: "Processing",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "11:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+₹81,000,00",
      status: "Pending",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-12",
      time: "12:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "₹21,000,00 BTC",
      status: "Pending",
    },
  ];

  const statusColor = {
    Pending: "#797979",
    Processing: "#F9A25B",
    Completed: "#27AE60",
    Cancelled: "#EB5757",
  };

  return (
    <Table.Root size="sm" colorScheme="gray">
      <Table.Header>
        <Table.Row h="20">
          <Table.ColumnHeader>Id</Table.ColumnHeader>
          <Table.ColumnHeader>Date</Table.ColumnHeader>
          <Table.ColumnHeader>Time</Table.ColumnHeader>
          <Table.ColumnHeader>Type</Table.ColumnHeader>
          <Table.ColumnHeader>Amount</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id} h="20">
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell>{item.time}</Table.Cell>
            <Table.Cell>
              {item.type.name}
              {item.type.tag && (
                <Badge ml="2" fontSize="xs">
                  {item.type.tag}
                </Badge>
              )}
            </Table.Cell>
            <Table.Cell>{item.amount}</Table.Cell>
            <Table.Cell>
              <Badge
                bg={statusColor[item.status]}
                color="white"
                borderRadius="full"
                px="3"
                py="1"
              >
                {item.status}
              </Badge>
            </Table.Cell>
            <Table.Cell textAlign="end">{item.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TransactionTable;
