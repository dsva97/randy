import {
  Box,
  Button,
  Heading,
  HStack,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BtnMore } from "../../components/BtnMore";
import CardList from "../../components/CardList";
import { CardPost } from "../../components/CardPost";
import { listWhoIAm, listThinkIAm } from "../../data/whoiam";
import { useLocale } from "../../hooks";

export const IndexView = () => {
  const t = useLocale();
  return (
    <Box>
      <Box textAlign="center" marginTop="1em">
        <Heading>Hola, no soy Randy</Heading>
        <Text marginTop="1em">Y esta una breve descripción</Text>
        <HStack justify="center" alignItems={"flex-start"} gap="1em">
          <CardList title={"creo que soy:"} list={listThinkIAm} />
          <CardList title={"pero si soy:"} list={listWhoIAm} />
        </HStack>
        <Text>Este es mi contenido</Text>
      </Box>
      <Box>
        <HStack gap="1em" justify={"center"}>
          <VStack>
            <Heading>{t("Diario", "Diary")}</Heading>
            <CardPost />
            <CardPost />
            <CardPost />
            <BtnMore link="/diary">Ver todos</BtnMore>
          </VStack>
          <VStack>
            <Heading>{t("Pensamientos", "Thoughts")}</Heading>
            <CardPost />
            <CardPost />
            <CardPost />
            <BtnMore link="/thoughts">Ver todos</BtnMore>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};
