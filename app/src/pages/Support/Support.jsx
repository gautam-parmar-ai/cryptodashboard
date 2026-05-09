import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoIosMail } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack gap="20px">
        <SupportCard
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
          icon={IoIosMail}
          leftComponent={<ContactCard />}
        />
        <SupportCard
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
          icon={RiMessageFill}
          leftComponent={
            <InfoCard
              imgUrl="/Visual.png"
              text="Learn more about our real estate, mortgage, and  corporate account services"
              tagText="Contact"
              inverted={true}
            />
          }
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
