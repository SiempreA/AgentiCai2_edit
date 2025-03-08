import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

const UserCard = () => {
  return (
    <HStack>
      <Avatar.Root size="md" key="md">
        <Avatar.Fallback name="Carlos Client" />
        <Avatar.Image src="../../assets/images/avatar-1.png" />
      </Avatar.Root>
      <VStack alignItems={"start"} gap={0}>
        <Text fontWeight="light">Carlos Client, 36</Text>
        <Text
          color="#7D7D7C"
          fontWeight="semibold"
          fontSize="12px"
          textDecoration="underline"
          letterSpacing={-0.5}
        >
          ID:987654321 - See more details
        </Text>
      </VStack>
    </HStack>
  );
};

export default UserCard;
