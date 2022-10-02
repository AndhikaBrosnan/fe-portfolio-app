import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { isMobileHandler } from "../../../helpers/responsive";
import styles from "./style.module.css";

const Education = () => {
  const isMobile = isMobileHandler();
  return (
    <Box p={isMobile ? null : 8}>
      <Heading as="h2" size="lg" mb={3}>
        Riwayat Pendidikan
      </Heading>

      {[0, 1, 2, 3].map((item) => {
        return (
          <>
            <Flex
              justifyContent="center"
              alignItems="center"
              p={2}
              mt={1}
              mb={1}
            >
              <Box>
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  objectFit="cover"
                  src="https://agricia.faperta.ugm.ac.id/wp-content/uploads/sites/377/2018/06/logo-ugm-png.png"
                  alt="Dan Abramov"
                  mr={2}
                />
              </Box>
              <Box flex={1}>
                <Box>
                  <Text className={styles["job-education"]}>
                    Universitas Brawijaya
                  </Text>
                </Box>
                <Box>
                  <Text>Bachelor's degree, Information Technology</Text>
                  <Text>2018 - 2021</Text>
                </Box>
                <Box>
                  <Text>Grade: 3.68</Text>
                </Box>
              </Box>
            </Flex>
            <Divider w="50%" />
          </>
        );
      })}
    </Box>
  );
};

export default Education;
