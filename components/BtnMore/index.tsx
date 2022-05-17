import { Button, ButtonProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface IBtnMore extends ButtonProps {
  link: string;
}
export const BtnMore = ({ children, ...props }: IBtnMore) => {
  const router = useRouter();
  return (
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
      {...props}
      onClick={() => router.push(props.link)}
    >
      {children}
    </Button>
  );
};
