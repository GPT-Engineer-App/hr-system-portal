import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading>About Us</Heading>
        <Text fontSize="lg">
          Welcome to our Human Resource Management System. Our mission is to streamline HR processes and improve employee engagement.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;