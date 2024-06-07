import { Container, Text, VStack, Heading, Box, Spinner, SimpleGrid } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, error, isLoading } = useEvents();

  if (isLoading) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Text fontSize="lg" color="red.500">Failed to load events</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">Events</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {events.map(event => (
          <Box key={event.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading fontSize="xl">{event.name}</Heading>
            <Text mt={4}>{new Date(event.date).toLocaleDateString()}</Text>
            <Text mt={4}>Venue ID: {event.venue_id}</Text>
            <Text mt={4}>{event.is_starred ? "⭐ Starred Event" : ""}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Events;