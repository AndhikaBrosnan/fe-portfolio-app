import { Box, Heading, Flex, Image, Text, Divider } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import styles from "./styles.module.css";
import { isMobileHandler } from "../../../helpers/responsive";

export const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const dummySkills = ["Javascript", "SQL", "MongoDB", "Typescript", "GoLang"];

const Jobs = () => {
  const isMobile = isMobileHandler();
  return (
    <Box p={isMobile ? null : 8}>
      <Heading as="h2" size="lg" mb={3}>
        Riwayat Pekerjaan
      </Heading>

      {[0, 1, 2, 3].map((item) => {
        return (
          <Box key={item}>
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
                  src="https://i.pinimg.com/736x/0a/b3/bf/0ab3bfaacfa2399a18576d8d8c151da8.jpg"
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
                    <CircleIcon boxSize={2} color="black" mr={1} ml={1} />
                    <Text>Full time</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex justifyContent="flex-start" alignItems="center">
                    <Text>Jan 2022 - Present</Text>
                    <CircleIcon boxSize={2} color="black" mr={1} ml={1} />

                    <Text>8 mos</Text>
                  </Flex>
                </Box>
                <Box>
                  <Text>Jakarta, Indonesia</Text>
                </Box>
                <Box mt={1}>
                  <Text>
                    <span style={{ fontWeight: "500" }}>Skills:</span>{" "}
                    {dummySkills.map((item) => (
                      <span key={item}>{item}, </span>
                    ))}{" "}
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Divider w="50%" />
          </Box>
        );
      })}
    </Box>
  );
};

export default Jobs;
