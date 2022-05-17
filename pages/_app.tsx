import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

const getPathSlugs = () => {
  // We fetched locales from our API once at build time
  return ["de", "en", "fr", "ru"].map((locale) => ({
    params: {
      locale,
    },
  }));
};

export async function getStaticPaths() {
  const pathsWithLocale = getPathSlugs();
  return {
    paths: pathsWithLocale,
  };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      ...params,
    },
  };
}

export default MyApp;
