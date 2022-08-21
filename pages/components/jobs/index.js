import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import styles from "./styles.module.css";

const Jobs = () => {
  return (
    <Box p={8}>
      <Heading as="h2" size="lg" mb={3}>
        Riwayat Pekerjaan
      </Heading>

      {[0, 1, 2, 3].map((item) => {
        return (
          <Flex justifyContent="center" alignItems="center" p={2}>
            <Box>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png"
                alt="Dan Abramov"
                mr={2}
              />
            </Box>
            <Box flex={1}>
              <Box>
                <Text className={styles["job-title"]}>Software Engineer</Text>
              </Box>
              <Box>
                <Flex justifyContent="flex-start" alignItems="center">
                  <Text>PT. Rekso Nasional Food (RNF)</Text>
                  <Icon viewBox="0 0 200 200" color="black" size={12}>
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  <Text>Full time</Text>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent="flex-start" alignItems="center">
                  <Text>Jan 2022 - Present</Text>
                  <Icon viewBox="0 0 200 200" color="black" size={12}>
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  <Text>8 mos</Text>
                </Flex>
              </Box>
              <Box>
                <Text>Jakarta, Indonesia</Text>
              </Box>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default Jobs;
