import { Box, Heading, Text } from "@chakra-ui/react";
import { isMobileHandler } from "../../../helpers/responsive";
import styles from "./style.module.css";

const Headline = () => {
  const isMobile = isMobileHandler();
  return (
    <Box className={styles["container-headline"]}>
      <Heading as="h1" size="xl">
        Arfandi Usemahu
      </Heading>
      <Heading as="h2" size={isMobile ? "sm" : "md"} mb={9}>
        Software Developer
      </Heading>

      <Text as="i">"Kalo ada yang bagus, ya saya hina. Biar balance!!"</Text>
    </Box>
  );
};

export default Headline;
