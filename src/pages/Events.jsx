import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Events = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Events Page</Heading>
        <Text fontSize="lg">Welcome to the Events Page</Text>
      </VStack>
    </Container>
  );
};

export default Events;