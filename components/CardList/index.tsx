import {
  Box,
  Center,
  Text,
  Stack,
  UnorderedList,
  ListItem,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";

interface ICardListProps {
  title: string;
  list: string[];
}

const width = "200px";

export default function CardList({ title, list }: ICardListProps) {
  const [show, setShow] = useState(false);
  const items = useMemo(() => (show ? list : list.slice(0, 4)), [list, show]);
  return (
    <Center py={6}>
      <Box
        width={width}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={4}
          color={useColorModeValue("gray.800", "white")}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            px={3}
            color={"green.500"}
            rounded={"full"}
          >
            {title}
          </Text>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <UnorderedList spacing={3}>
            {items.map((item) => (
              <ListItem key={item} textAlign="left">
                {item}
              </ListItem>
            ))}
          </UnorderedList>
          {list.length > 4 && (
            <Button
              mt={10}
              w={"full"}
              bg={"green.400"}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
              _hover={{
                bg: "green.500",
              }}
              _focus={{
                bg: "green.500",
              }}
              onClick={() => setShow(!show)}
            >
              {show ? "ver menos" : "ver más"}
            </Button>
          )}
        </Box>
      </Box>
    </Center>
  );
}
