import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";
import { useEffect } from "react";
import { fetchExample } from "../../api/query/examplequery";
import { useQuery } from "@tanstack/react-query";

const Dashboard = ({}) => {
  const exampleQuery = useQuery({
    queryKey: ["example"],
    queryFn: fetchExample,
  });

  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: "1",
            lg: "2",
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/loan.png"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/Visual.png"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            tagText="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
