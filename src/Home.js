import { Card, CardBody, Text, Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <Flex flexDirection="column" justifyContent="center" alignItems="center" w="60vw" mx="auto">
       <h1> HOME</h1>
        <Box>
          <Link to="/">
                <h2>Home</h2>
          </Link>
          <Link to="/case1">
            <h2>
              Case 1
            </h2>
            </Link>
          <Link to="/case2">
            <h2>
              Case 2
            </h2>
          </Link>
          <Link to="/case3">
            <h2>
              Case 3
            </h2>
          </Link>
        </Box>
    
    </Flex>
    );
};

export default Home;