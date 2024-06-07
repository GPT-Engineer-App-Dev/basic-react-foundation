import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Our Website</Heading>
        <Text fontSize="lg">This is a minimalistic React application using Chakra UI.</Text>
        <Box p={4} borderWidth={1} borderRadius="lg" width="100%" textAlign="center">
          <Text>Start building your amazing application here!</Text>
        </Box>
        {session ? (
          <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
        ) : (
          <Button colorScheme="teal" onClick={handleLogin}>Login</Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;