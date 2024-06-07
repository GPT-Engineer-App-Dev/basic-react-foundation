import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Our Website</Heading>
        <Text fontSize="lg">This is a minimalistic React application using Chakra UI.</Text>
        <Box p={4} borderWidth={1} borderRadius="lg" width="100%" textAlign="center">
          <Text>Start building your amazing application here!</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;