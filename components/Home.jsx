import { Box, Container, Heading, Image, Stack, Text,Flex,useBreakpointValue,Button } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img7.jpg';
import img2 from '../assets/WallpaperDog-10870541.jpg';
import img3 from '../assets/game3.jpg'
import img4 from '../assets/game4.png';
import img6 from '../assets/game7.jpg';
import img5 from '../assets/clipart1262588.png';
import { Link } from 'react-router-dom';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Frozeverse 
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
            Metaverse Games 
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Join the ranks of champions and embrace your inner gaming warrior.
          Prepare for a gaming revolution that will leave you breathless.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
                 <Link to={'/videos'}>Latest Games</Link>
             
            </Button>
            <Button rounded={'full'}><Link to={'/signup'}>Sign Up</Link></Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={img5}
        />
      </Flex>
    </Stack>
      
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      {/* <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading> */}
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      {/* <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading> */}
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      {/* <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading> */}
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img6} h="full" w={'full'} objectFit={'cover'} />
      {/* <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading> */}
    </Box>
  </Carousel>
);

export default Home;
