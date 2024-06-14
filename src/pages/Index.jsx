import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to HRMS</Heading>
        <Text fontSize="lg">Your one-stop solution for managing human resources efficiently.</Text>
      </VStack>
    </Container>
  );
};

export default Index;