import { Box, Heading, Text } from "@chakra-ui/react";
import styles from "./style.module.css";

const Headline = () => {
  return (
    <Box className={styles["container-headline"]}>
      <Heading as="h1" size="xl">
        Arfandi Usemahu
      </Heading>
      <Heading as="h2" size="md" mb={9}>
        Software Developer
      </Heading>

      <Text as="i">"Kalo ada yang bagus, ya saya hina. Biar balance!!"</Text>
    </Box>
  );
};

export default Headline;
