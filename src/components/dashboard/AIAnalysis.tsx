import { Text, VStack } from "@chakra-ui/react";

import ChatBox from "./ChatBox";
import ChatBubble from "./ChatBubble";
import CaseAnalysis from "./CaseAnalysis";
import AnalysisConclusion from "./AnalysisConclusion";

const AIAnalysis = ({ showAnalysis }: { showAnalysis: boolean }) => {
  return (
    <VStack
      p="24px 0 24px 0"
      alignItems="left"
      backgroundColor="#F8F8F6"
      borderRadius={16}
      h="100%"
      justifyContent="space-between"
      gap={0}
    >
      <Text fontSize={20} fontWeight="light" p="0 24px 0 24px">
        Agentic AI Analysis
      </Text>
      {showAnalysis ? (
        // <>
        //   <VStack flex="1" alignItems="left" width="100%">
        //     <CaseAnalysis />
        //   </VStack>
        //   <ChatBox />
        // </>
        <>
          <VStack flex="1" alignItems="left" width="100%">
            <AnalysisConclusion />
          </VStack>
          <ChatBox />
        </>
      ) : (
        <>
          <VStack flex="1" alignItems="left" width="100%" pt={9}>
            <ChatBubble />
          </VStack>
          <ChatBox />
        </>
      )}
    </VStack>
  );
};

export default AIAnalysis;
