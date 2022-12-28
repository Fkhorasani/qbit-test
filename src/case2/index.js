import React from 'react';
import { Box } from '@chakra-ui/react';
import data from './data2.json'

function countCommentContent(obj) {
    const str = JSON.stringify(obj);
    const matches = str.match(/"commentContent"/g);
    return matches ? matches.length : 0;
  }


const Case2 = () => {
    const count = countCommentContent(data);
    return (
        <Box textAlign="left" mx="auto" w="fit-content">
            <Box textStyle='h1' fontWeight="bold" fontSize="4vw" textAlign="center">Case 2</Box>
            <Box textStyle='h2' fontWeight="bold" fontSize="2vw">Count Comment Content</Box>
            <Box textStyle='h3'>Total Comment Content Occured: {count}</Box>
        </Box>
    );
};

export default Case2;