import React from "react";
import {Heading, Text, Image, VStack, Link as ChakraLink, Card } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <ChakraLink as={Link} to={`/books/${id}`} _hover={{ textDecoration: "none" }}>
      <Card
        key={id}
        my={4}
        p={4}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        transition="transform 0.2s, background-color 0.2s"
        _hover={{
          transform: "scale(1.02)",
          bgGradient: [
            'linear(to-tr, yellow.300, teal.400)',
            'linear(to-t, teal.200, blue.500)',
            'linear(to-b, purple.100, orange.300)',]
        }}
      >
        <VStack spacing={2}>
          <Image
            boxSize="150px"
            objectFit="cover"
            src={`http://localhost:8000/${image}`}
            alt={title}
          />
          <Heading size="md" textAlign="center">
            {title} ({year})
          </Heading>
          <Text fontSize="lg" fontWeight="semibold">
            {author}
          </Text>
          <Text fontSize="md" color="gray.600">
            Publisher: {publisher}
          </Text>
        </VStack>
      </Card>
    </ChakraLink>
  );
}
