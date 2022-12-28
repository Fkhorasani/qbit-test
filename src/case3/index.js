import React from 'react';
import { Box, Flex, Image, Text, Grid, GridItem, Center, Link } from "@chakra-ui/react";
import { AOS } from "../components/AOS";
import { fadeInUp, zoomIn, zoomInRotate, popupBottomRight, popupBottomLeft, fade, fadeInLeft, fadeInRight } from "../components/animation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import Logo from '../components/Logo/Logo'

import socials from "./socials.json";
import layanan from "./layanan.json";

const Case3 = () => {
    return (
        <Box bgColor="white" overflowX="hidden" color="black">
            <Flex mx="auto"
            justifyContent="center"
            bgImage="url('/image/Heading.png')"
            bgRepeat="no-repeat"
            bgSize="cover"
            h={{ md: "130vh", base: "100vh" }}>
                <Flex justifyContent="space-evenly" px={{ md: "3rem", base: "1.5rem" }}>
                    <AOS variants={popupBottomLeft} triggerOnce={true} delay={0.2}>
                       <Box verticalAlign="center" pt={{ md: "20vh", base: "8vh" }}>
                        <Box
                            maxW={{ md: "50vw", base: "40vw" }}
                            pe={{ md: "8rem", base: "2rem" }}
                            me={{ md: "none", base: "3vh" }}
                        >
                            <Text
                            fontSize={{ lg: "8xl", md: "6xl", base: "2xl" }}
                            fontWeight="extrabold"
                            lineHeight="1.3"
                            w="100%"
                            whiteSpace="nowrap"
                            >
                            Perbaiki motor
                            <br />
                            Anda bersama
                            <br />
                            Qbit Motor
                            </Text>
                            <Text
                            fontSize={{ base: "sm", md: "2xl" }}
                            py={{ sm: "1rem", base: "-0.2rem" }}
                            >
                            The original Online Workshop on Website that focuses on online reservation and consultant
                            </Text>
                        </Box>
                        </Box> 
                    </AOS>
                    <AOS variants={popupBottomRight} triggerOnce={true} delay={0.2}>
                        <Image
                        src="/image/motor.png"
                        h={{
                            lg: "calc(12rem + 23vw)",
                            md: "calc(12rem + 18vw)",
                            base: "calc(14rem + 16vw)",
                        }}
                        w="auto"
                        pt={{ md: "15vh", base: "8vh" }}
                        mt={{ md: "none", base: "2vh" }}
                        ></Image>
                    </AOS>
                </Flex>
            </Flex>
            <Flex 
            bgImage="url('https://www.melekotomotif.com/wp-content/uploads/bengkel-motor.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="60vh" 
            my="5vh"
            color="white"
            justifyContent="center"
            alignItems="center">
                <Box maxW="60vw">
                    <Text
                    fontSize="6xl"
                    fontWeight="extrabold"
                    textShadow="1px 3px #000000">
                        Layanan Terbaik
                    </Text>
                    <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    textShadow="1px 2px #000000">
                        Suku cadang yang lengkap dan berkualitas, serta montir-montir yang berpengalaman hebat
                    </Text>
                </Box>
            </Flex>
            <Flex h="fit-content" w="100vw" flexDirection="column"
            color="black">
            <AOS variants={zoomIn} triggerOnce={true} delay={0.2}>  
                <Text
                fontWeight="bold"
                fontSize={{ base: "calc(1rem + 3vw)", md: "3rem", lg: "3.75rem" }}
                textAlign="center"
                mx="auto"
                >
                    Visi Misi Qbit Motor
                </Text> 
            </AOS>
            <AOS variants={zoomIn} triggerOnce={true} delay={0.23}>  
                <Center
                fontSize="2xl"
                py="2rem"
                fontWeight="500"
                textAlign="center"
                >
                    Menjadi salah satu bengkel yang kompeten dalam melayani publik
                </Center>
            </AOS>
                <AOS variants={zoomIn} triggerOnce={true} delay={0.26}>
                    <Box>
                        <Flex pb=".5rem" justifyContent="center">
                            <Box
                                rounded="full"
                                fontWeight="bold"
                                bgGradient="linear(to-br, white, yellow.500)"
                                p=".5rem"
                                fontSize={{
                                base: "calc(1rem + 3vw)",
                                md: "2.25rem",
                                lg: "2.75rem",
                                }}
                                minW={{ lg: "5rem", md: "4rem", base: "calc(3rem + 3vw)" }}
                                maxH={{ lg: "5rem", md: "4rem", base: "calc(3rem + 3vw)" }}
                                my="auto"
                            >
                                <Center color="white" mt="-0.2rem">
                                01
                                </Center>
                            </Box>
                            <Text
                                fontSize={{ md: "2xl", base: "md" }}
                                w={{ lg: "45vw", md: "70vw", base: "60vw" }}
                                ps="1.5rem"
                                fontWeight="500"
                                my="auto"
                                textAlign="justify"
                            >
                                Menjadi bengkel yang melayani tidak hanya secara luring melainkan secara daring juga.
                            </Text>
                        </Flex>
                        <Flex pb=".5rem" justifyContent="center">
                            <Box
                                rounded="full"
                                fontWeight="bold"
                                bgGradient="linear(to-br, white, yellow.500)"
                                p=".5rem"
                                fontSize={{
                                base: "calc(1rem + 3vw)",
                                md: "2.25rem",
                                lg: "2.75rem",
                                }}
                                minW={{ lg: "5rem", md: "4rem", base: "calc(3rem + 3vw)" }}
                                maxH={{ lg: "5rem", md: "4rem", base: "calc(3rem + 3vw)" }}
                                my="auto"
                            >
                                <Center color="white" mt="-0.2rem">
                                02
                                </Center>
                            </Box>
                            <Text
                                fontSize={{ md: "2xl", base: "md" }}
                                w={{ lg: "45vw", md: "70vw", base: "60vw" }}
                                ps="1.5rem"
                                fontWeight="500"
                                my="auto"
                                textAlign="justify"
                            >
                                Memberikan konsultasi secara daring melalui website.
                            </Text>
                        </Flex>
                        <Flex pb=".5rem" justifyContent="center">
                            <Box
                                rounded="full"
                                fontWeight="bold"
                                bgGradient="linear(to-br, white, yellow.500)"
                                p=".5rem"
                                fontSize={{
                                base: "calc(1rem + 3vw)",
                                md: "2.25rem",
                                lg: "2.75rem",
                                }}
                                minW={{ lg: "5rem", md: "4rem", base: "calc(3rem + 3vw)" }}
                                maxH={{ lg: "5rem", md: "4rem", base: "calc(3rem + 3vw)" }}
                                my="auto"
                            >
                                <Center color="white" mt="-0.2rem">
                                03
                                </Center>
                            </Box>
                            <Text
                                fontSize={{ md: "2xl", base: "md" }}
                                w={{ lg: "45vw", md: "70vw", base: "60vw" }}
                                ps="1.5rem"
                                fontWeight="500"
                                my="auto"
                                textAlign="justify"
                            >
                                Menjadi bengkel yang dapat direservasi secara daring dan dapat dipanggil ke lokasi.
                            </Text>
                        </Flex>
                    </Box>
                </AOS>      
            </Flex>
            <Box>
                <AOS variants={zoomIn} triggerOnce={true} delay={0.2}>  
                    <Text
                    fontWeight="bold"
                    fontSize={{ base: "calc(1rem + 3vw)", md: "3rem", lg: "3.75rem" }}
                    textAlign="center"
                    mx="auto"
                    >
                        Layanan Kami
                    </Text>
                    <Grid templateColumns={{md: "repeat(3, 1fr)", base: "repeat(1, 1fr)"}} gap={8} pt="2rem" mx="2vw">
                    {layanan.map((data, id) => (
                        <GridItem key={id}>
                        <Flex flexDir="column" justifyContent="center" alignItems="center" bgColor="#EABF51" boxShadow="xl" p="2vw" borderRadius="2xl" h="50vh">
                            <Image src={`image/layanan/${data.img}.png`} maxW="20%" />
                            <Text fontSize="2xl" fontWeight="bold" textAlign="center">{data.title}</Text>
                            <Text fontSize="xl" textAlign="justify" mt="2vh" overflowY="auto" h="35vh">{data.desc}</Text>
                        </Flex>
                        </GridItem>
                    ))}
                    </Grid> 
                </AOS>
            </Box>
            <AOS variants={zoomIn} triggerOnce={true} delay={0.2}>  
                <Text
                fontWeight="bold"
                fontSize={{ base: "calc(1rem + 3vw)", md: "3rem", lg: "3.75rem" }}
                textAlign="center"
                mx="auto"
                my="2vh"
                >
                    Gallery
                </Text> 
            </AOS>
            <AOS variants={zoomIn} triggerOnce={true} delay={0.2}>  
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><Image h="40vw" mx="auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-M-srdhgaRXU%2FXBxfkstm5PI%2FAAAAAAAABfA%2Feyzq5e52SloJu6fx6HpSHC6G6rfN917egCEwYBhgL%2Fs1600%2FFN-3-Bengkel%252Bmotor.jpg&f=1&nofb=1&ipt=7b5ea75ee933fdd5f8bcb2414e1bbc50b7670a0bd24371e63f1a4ca4699049d9&ipo=images" /></SwiperSlide>
                    <SwiperSlide><Image h="40vw" mx="auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcarmudi-journal.icarcdn.com%2Fcarmudi-id%2Fwp-content%2Fuploads%2F2020%2F07%2F10132645%2FIMG_20160830_115531.jpg&f=1&nofb=1&ipt=962eeb6f87a4b872965f63b82f4422cca18a89c4dfcfbec4964a158931a8946b&ipo=images" /></SwiperSlide>
                    <SwiperSlide><Image h="40vw" mx="auto" src="http://galeri.uny.ac.id/sites/galeri.uny.ac.id/files/DSC_01341.jpg" /></SwiperSlide>
                    <SwiperSlide><Image h="40vw" mx="auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-M-srdhgaRXU%2FXBxfkstm5PI%2FAAAAAAAABfA%2Feyzq5e52SloJu6fx6HpSHC6G6rfN917egCEwYBhgL%2Fs1600%2FFN-3-Bengkel%252Bmotor.jpg&f=1&nofb=1&ipt=7b5ea75ee933fdd5f8bcb2414e1bbc50b7670a0bd24371e63f1a4ca4699049d9&ipo=images" /></SwiperSlide>
                    <SwiperSlide><Image h="40vw" mx="auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcarmudi-journal.icarcdn.com%2Fcarmudi-id%2Fwp-content%2Fuploads%2F2020%2F07%2F10132645%2FIMG_20160830_115531.jpg&f=1&nofb=1&ipt=962eeb6f87a4b872965f63b82f4422cca18a89c4dfcfbec4964a158931a8946b&ipo=images" /></SwiperSlide>
                    <SwiperSlide><Image h="40vw" mx="auto" src="http://galeri.uny.ac.id/sites/galeri.uny.ac.id/files/DSC_01341.jpg" /></SwiperSlide>
                    <SwiperSlide><Image h="40vw" mx="auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-M-srdhgaRXU%2FXBxfkstm5PI%2FAAAAAAAABfA%2Feyzq5e52SloJu6fx6HpSHC6G6rfN917egCEwYBhgL%2Fs1600%2FFN-3-Bengkel%252Bmotor.jpg&f=1&nofb=1&ipt=7b5ea75ee933fdd5f8bcb2414e1bbc50b7670a0bd24371e63f1a4ca4699049d9&ipo=images" /></SwiperSlide>
                    <SwiperSlide><Image h="40vw" mx="auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcarmudi-journal.icarcdn.com%2Fcarmudi-id%2Fwp-content%2Fuploads%2F2020%2F07%2F10132645%2FIMG_20160830_115531.jpg&f=1&nofb=1&ipt=962eeb6f87a4b872965f63b82f4422cca18a89c4dfcfbec4964a158931a8946b&ipo=images" /></SwiperSlide>
                    <SwiperSlide><Image h="40vw" mx="auto" src="http://galeri.uny.ac.id/sites/galeri.uny.ac.id/files/DSC_01341.jpg" /></SwiperSlide>
                </Swiper>
            </AOS>
            <Box
      bgImage="url('/image/footer/Footer.png')"
      minH="60vh"
      minW="100vw"
      bgRepeat="no-repeat"
      bgSize="cover"
      mt="5vh"
    >
      <Box
        mx={{ md: "3rem", base: "none" }}
        color="white"
      >
        <Flex
          pt="30vh"
          justify="center"
          justifyContent="space-around"
          flexDirection={{ md: "row", base: "column" }}
        >
          <Flex
            flexDirection="column"
            maxW={{ md: "35vw", base: "80vw" }}
            alignSelf="center"
          >
            <Flex justifyContent="flex-start">
              <Logo />
            </Flex>
            <Text pt="2rem" fontSize={{ base: "md", md: "2xl" }}>
              Qbit Motor merupakan sebuah bengkel yang dilengkapi dengan layanan secara daring
              . Layanan daring ini berupa konsultasi, reservasi perbaikan, dan pemesanan barang.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            mx={{ md: "none", base: "4rem" }}
            pt={{ base: "2rem", md: "none" }}
          >
            <Text fontSize={{ base: "md", md: "2xl" }}>Ikuti kami:</Text>
            <Grid templateColumns="repeat(4, 1fr)" gap={8} pt="2rem">
              {socials.map((data, id) => (
                <GridItem key={id}>
                  <Link href={data.link} isExternal>
                    <Image src={`image/footer/${data.img}.png`} maxW="70%" />
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Flex>
        <Text
          pt={{ md: "10rem", base: "5rem" }}
          pb="1rem"
          fontSize={{ base: "sm", md: "md" }}
          textAlign="center"
        >
          &copy; 2022 Qbit Motor. All Rights Reserved
        </Text>
      </Box>
    </Box>
        </Box>
        
    );
};

export default Case3;