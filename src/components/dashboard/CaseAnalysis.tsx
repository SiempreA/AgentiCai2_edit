import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import CheckIcon from "../../../public/assets/icons/check";
import { mockAnalysisCard } from "@/constants";
import StatusList from "./StatusList";

const CaseAnalysis = () => {
  return (
    <VStack gap={0} width="100%">
      <StatusList />
      <VStack px={6} pt={5} gap={8} alignItems="left" width="100%">
        {mockAnalysisCard.map((card) => (
          <VStack key={card.title} alignItems="flex-start">
            <HStack>
              <Image src={card.person.image} borderRadius={50} />
              <Text fontSize="sm"> {card.title} </Text>
            </HStack>
            <VStack alignItems="flex-start" width="100%">
              {card.assessments.map((assessment) => (
                <HStack
                  key={assessment.label}
                  width="100%"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={5}
                >
                  <Text>{assessment.label}</Text>
                  <Box
                    flex="1"
                    border="0.5px dashed transparent"
                    borderImage="repeating-linear-gradient(90deg, #A2A2A1, #A2A2A1 5px, transparent 5px, transparent 10px) 1"
                  />
                  {assessment.state && <CheckIcon width="36px" height="36px" />}
                </HStack>
              ))}
            </VStack>
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default CaseAnalysis;
