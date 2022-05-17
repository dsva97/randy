import {
  Box,
  Heading,
  HStack,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CardList from "../../components/CardList";
import { listWhoIAm, listThinkIAm } from "../../data/whoiam";

export const IndexView = () => {
  return (
    <Box textAlign="center" marginTop="1em">
      <Heading>Hola, no soy Randy</Heading>
      <Text marginTop="1em">Y esta una breve descripción</Text>
      <HStack justify="center" alignItems={"flex-start"} gap="1em">
        <CardList title={"creo que soy:"} list={listThinkIAm} />
        <CardList title={"pero si soy:"} list={listWhoIAm} />
      </HStack>
      <Text>Lo demás es mi diario</Text>
    </Box>
  );
};
