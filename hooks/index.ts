import { useRouter } from "next/router";
import { ReactNode } from "react";

type ILocaleProp = string | ReactNode | ReactNode[];

export const useLocale = () => {
  const router = useRouter();
  return (es: ILocaleProp, en: ILocaleProp) => {
    switch (router.locale) {
      case "es":
        return es;
      case "en":
        return en;
      default:
        return es;
    }
  };
};
