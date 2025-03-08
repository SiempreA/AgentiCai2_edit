import { Box, HStack, Image, Text } from "@chakra-ui/react";

interface ImageCardProps {
  src: string;
  alt?: string;
  fileName: string;
  fileSize: string;
}

const ImageCard = ({
  src,
  alt = "image",
  fileName,
  fileSize,
}: ImageCardProps) => {
  return (
    <HStack
      width="auto"
      borderRadius={16}
      overflow="hidden"
      p="7px"
      backgroundColor={"#F8F8F6"}
    >
      <Image src={src} alt={alt} width={12} height={12} />
      <Box justifyContent="center">
        <Text fontSize="sm">{fileName}</Text>
        <Text fontSize="sm" color="#7D7D7C">
          {fileSize}
        </Text>
      </Box>
    </HStack>
  );
};

export default ImageCard;
