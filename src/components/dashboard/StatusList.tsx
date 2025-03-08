import { HStack, Box, Text } from "@chakra-ui/react";
import CheckIcon from "../../../public/assets/icons/check";
import { mockedAnalysisStatus } from "@/constants";

const StatusList = () => {
  return (
    <HStack
      p="24px 24px 16px 24px"
      width="100%"
      borderBottom="1px solid #E0E0DE"
      gap={2}
      justifyContent="space-between"
    >
      {mockedAnalysisStatus.map((status, i) => (
        <HStack key={i} gap={2} width="100%" alignItems="center">
          {status.state && <CheckIcon width="36px" height="36px" />}
          <Text fontSize="sm" flexShrink={0}>
            {status.label}
          </Text>
          {i < mockedAnalysisStatus.length - 1 && (
            <Box
              flexGrow={1}
              height="1px"
              borderBottom="1px solid #E0E0DE"
              mx={2}
            />
          )}
        </HStack>
      ))}
    </HStack>
  );
};

export default StatusList;