import { HStack, Box, Text, Circle, Flex } from "@chakra-ui/react";
import { mockedAnalysisStatus } from "@/constants";
import CloseIcon from "../../../public/assets/icons/close";

const StatusList = () => {
  return (
    <HStack
      p="24px 0 16px 0"
      width="100%"
      borderBottom="1px solid #E0E0DE"
      alignItems="center"
      justifyContent="space-between"
      pl={10}
      pr={10}
    >
      {mockedAnalysisStatus.map((status, i) => (
        <Flex key={i} alignItems="center" flex="1">
          {i === 0 ? (
            <CloseIcon width="36px" height="36px" />
          ) : (
            <Circle size="36px" border="1px solid #A0A0A0" />
          )}
          <Text fontSize="sm" ml={2} minWidth="max-content">
            {status.label}
          </Text>
          {i < mockedAnalysisStatus.length - 1 && (
            <Box
              flex="1"
              height="1px"
              bg="#A0A0A0"
              mx={2}
            />
          )}
        </Flex>
      ))}
    </HStack>
  );
};

export default StatusList;
