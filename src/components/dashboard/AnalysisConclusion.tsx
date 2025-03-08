import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { claimSummaryList } from "@/constants";

import StatusList from "./StatusList";
import BrandIcon from "../../../public/assets/icons/brand";

const AnalysisConclusion = () => {
  return (
    <VStack alignItems="left" gap={8} height="100%">
      <StatusList />
      <Box px={6} width="100%">
        <BrandIcon width="35" height="35" />
      </Box>
      <VStack alignItems="left" px={6} gap={6} flex={1}>
        <Text fontWeight="bold" color="#4B4949">
          Claim Analysis Conclusion
        </Text>
        <Text fontWeight="light">
          The provided evidence confirms that the submitted photo aligns with
          the customer's description. No indications of fraud or inconsistencies
          were found.
        </Text>
        <Text fontWeight="bold" color="#4B4949">
          Claim Summary:
        </Text>
        <Box px={6} as="ul" listStyleType="disc">
          {claimSummaryList.map((item) => (
            <li>
              <HStack>
                <Text fontWeight="semibold" color="#4B4949">
                  {item.title}:
                </Text>
                <Text fontWeight="light" color="#4B4949">
                  {item.description}
                </Text>
              </HStack>
            </li>
          ))}
        </Box>
        <HStack bg="#edf3e8" width="100%" borderRadius={12} p={4}>
          <Text color="#57744A">Covered:</Text>
          <Text color="#000000">
            Proceeding with claim approval based on the verified details.
          </Text>
        </HStack>
      </VStack>
      <Box px={6} width="100%">
        <Button
          variant="ghost"
          height="60px"
          border="1px solidrgb(47, 136, 99)"
          borderRadius={50}
          width="100%"
        >
          Complete Claim and Generate a Document
        </Button>
      </Box>
    </VStack>
  );
};

export default AnalysisConclusion;
