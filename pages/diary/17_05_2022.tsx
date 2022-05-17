import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useLocale } from "../../hooks";

const Today = () => {
  const t = useLocale();
  return (
    <Box>
      <Heading>{t("17 de Mayo del 2022", "May 17, 2022")}</Heading>

      <Text>
        Me levante después de despertar por segunda vez gracias a una llamada.
        ELLA me llamó porque su tía tenía un problema: su computadora no
        encendía.
      </Text>

      <Text>
        Me pareció que era por un problema con la BIOS o que el disco duro.
        Prendí la PC, googleé el texto de la foto que me envió confirmé que
        puede ser por eso o por una mala configuración en la BIOS. Le dije que
        iría a las 4pm y listo.
      </Text>

      <Text>
        Inmediatamente después puse un{" "}
        <Link
          href="https://www.youtube.com/watch?v=H0IVZX5fIG0&ab_channel=Spooki-Topic"
          rel="nofollow"
        >
          video en youtube
        </Link>{" "}
        por la música, pero la imagen me excitó así que me fui a xvideos a
        buscar algo similar. Maso menos lo encontré, pasó y terminé. Volví a mis
        quehaceres.
      </Text>

      <Text>
        Me puse a programar esta web no encontré la forma en la que me gustaría
        programar el multi-idioma, al final me decanté por una solución rápida:
        usar subdominios para diferencias el contenido multi-idioma. Terminado
        eso me puse a adquirir el dominio, configurar las CDN y escribir esta
        página. Y heme aquí.
      </Text>

      <Text>
        Debo acotar que en las 3 horas en las que pasó lo anterior también jugué
        2 partidas de Dota 2, me puse a pensar si puedo conseguir una relación
        de maestro-discípulo de parte de la tía de ELLA a pesar de haberla
        fallado con un desarrollo (lo terminé y desplegué, pero no le comuniqué
        porque me demoré), googleé unas alternativas de API o servicios para
        agendar usuarios debido una duda que mi hermano tuvo y me pidió (me
        refirió Calendly). Esto último me hizo pensar en Wordpress y considerar
        volver a tocarlo. Me descargué WPLocal. Son las 11:56.
      </Text>

      <Text>
        Traté de desplegar esta web con subdominios multi-idioma pero fracasé.
        Usaré el sub-path routing. Ya son las 12:42.
      </Text>
    </Box>
  );
};

export default Today;
