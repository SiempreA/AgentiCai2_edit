import { HStack, Box } from "@chakra-ui/react";

import ClaimAssessment from "@/components/dashboard/ClaimAssessment";
import IncidentDetails from "@/components/dashboard/IncidentDetails";
import AIAnalysis from "@/components/dashboard/AIAnalysis";
import { useState } from "react";

const Dashboard = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <HStack
      width="100%"
      border="1px solid #E0E0DE"
      borderRadius={16}
      p="24px 24px 24px 0"
      gap={0}
      alignItems="stretch"
    >
      <Box flex="1">
        <ClaimAssessment />
        <IncidentDetails setShowAnalysis={setShowAnalysis} />
      </Box>
      <Box flex="1">
        <AIAnalysis showAnalysis={showAnalysis} />
      </Box>
    </HStack>
  );
};

export default Dashboard;
