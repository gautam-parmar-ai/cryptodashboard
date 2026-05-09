import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgImage={`url(${imgUrl})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bg={inverted ? "primary" : "white"}
    >
      <Tag.Root
        bg={inverted ? "white" : "primary"}
        color={inverted ? "primary" : "white"}
        borderRadius="full"
      >
        <Tag.Label>{tagText}</Tag.Label>
      </Tag.Root>
      <Text
        textStyle="h5"
        fontWeight="medium"
        mt="4"
        color={inverted ? "white" : "blackAlpha.600"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
