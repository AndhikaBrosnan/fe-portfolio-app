import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { isMobileHandler } from '../../../helpers/responsive';
import styles from './style.module.css';

const Headline = () => {
  const isMobile = isMobileHandler();
  console.log('isMobile', isMobile);

  return (
    <Box className={styles['container-headline']}>
      <Flex justifyContent="flex-start" alignItems="center">
        <Box className={styles['profile-photo']}>
          <Image
            src="https://bit.ly/dan-abramov"
            alt="profilePhoto"
            objectFit="cover"
            borderRadius="full"
            boxSize="150px"
          />
        </Box>

        <Box>
          <Heading as="h1" size="xl">
            Arfandi Usemahu
          </Heading>
          <Heading as="h2" size={isMobile ? 'sm' : 'md'} mb={9}>
            Software Developer
          </Heading>
          <Text as="i">
            "Kalo ada yang bagus, ya saya hina. Biar balance!!"
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Headline;
