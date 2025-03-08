import { Box, Text, VStack } from "@chakra-ui/react";
import BrandIcon from "../../../public/assets/icons/brand";

const ChatBubble = () => {
  return (
    <VStack alignItems="start">
      <Box
        border="1px solid #E7E7E4"
        p="6px"
        width={9}
        height={9}
        borderRadius={20}
      >
        <BrandIcon width="22px" height="22px" />
      </Box>
      <Text>I'm ready to help you!</Text>
    </VStack>
  );
};

export default ChatBubble;
