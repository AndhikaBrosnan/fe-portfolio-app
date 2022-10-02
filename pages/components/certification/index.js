import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { isMobileHandler } from "../../../helpers/responsive";
import styles from "./style.module.css";

const Certification = () => {
  const isMobile = isMobileHandler();
  return (
    <Box p={isMobile ? null : 8}>
      <Heading as="h2" size="lg" mb={3}>
        Lisensi &#38; Sertifikat
      </Heading>

      {[0, 1].map((item) => {
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
                  src="https://seeklogo.com/images/U/udemy-logo-C3D3F5AC0C-seeklogo.com.png"
                  alt="Dan Abramov"
                  mr={2}
                />
              </Box>
              <Box flex={1}>
                <Box>
                  <Text className={styles["job-sertifikasi"]}>
                    Express JS Course by Stephen Grider
                  </Text>
                </Box>
                <Box>
                  <Text>Udemy</Text>
                  <Text>August 2018 - September 2021</Text>
                </Box>
                <Box>
                  <Text>Certification number: hfs23-23h4j-123ji-64bcva</Text>
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

export default Certification;
