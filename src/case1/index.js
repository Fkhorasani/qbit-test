import { Box, ListItem, UnorderedList, OrderedList } from '@chakra-ui/react';
import React from 'react';
import data from './data.json'

const uniqueFruit = Array.from(new Set(data.map((item) => item.fruitName.toLowerCase())));
const uniqueType = Array.from(new Set(data.map((item) => item.fruitType)));

const countFruit = data.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = 0;
    }
    acc[fruit.fruitType] += fruit.stock;
    return acc;
  }, {});

const Case1 = () => {
    const groupedType = {};

    for (const fruit of data) {
        if (!groupedType[fruit.fruitType]) {
        groupedType[fruit.fruitType] = [];
        }
        groupedType[fruit.fruitType].push(fruit);
    }
    return (
        <Box textAlign="left" mx="auto" w="fit-content">
            <Box textStyle='h1' fontWeight="bold" fontSize="4vw" textAlign="center">Case 1</Box>
            <Box textStyle='h2' fontWeight="bold" fontSize="2vw">Unique Fruit Names</Box>
            <UnorderedList>{uniqueFruit.map((fruitName) =>{
                const firstLetter = fruitName.charAt(0).toUpperCase();
                const restOfString = fruitName.slice(1).toLowerCase();
                return <ListItem>{firstLetter}{restOfString}</ListItem>
            })}</UnorderedList>

            <Box textStyle='h2' fontWeight="bold" fontSize="2vw">Fruit Counts based on FruitType </Box>
            <Box textStyle='h3'>Total Wadah</Box>
            <OrderedList>{uniqueType.map((fruitType) => {
                return <ListItem>
                    {fruitType}
                    </ListItem>
            })}</OrderedList>
            <Box textStyle='h3'>Total Fruit Type in Each Category</Box>
            <UnorderedList>{uniqueType.map((fruitType) =>{
                return <ListItem>
                    {fruitType}: {data.filter((item) => item.fruitType === fruitType).length}
                    </ListItem>
            })}</UnorderedList>
            <UnorderedList>
                {Object.entries(groupedType).map(([category, fruits]) => (
                    <ListItem>
                    <h3>{category}</h3>
                    <UnorderedList>
                        {fruits.map((fruit) => (
                        <ListItem>{fruit.fruitName}</ListItem>
                        ))}
                    </UnorderedList>
                    </ListItem>
                ))}
            </UnorderedList>
            <Box textStyle='h2' fontWeight="bold" fontSize="2vw">Berapa total stock buah yang ada di masing-masing wadah? </Box>
            <UnorderedList>
            {Object.entries(countFruit).map(([category, totalStock]) => (
                <ListItem>
                {category}: {totalStock}
                </ListItem>
            ))}
            </UnorderedList>
            
            <Box textStyle='h2' fontWeight="bold" fontSize="2vw">Apakah ada komentar terkait kasus di atas?</Box>
            <Box textStyle='p'>Pada case 1 ini saya cukup bisa untuk menyelesaikannya, hanya saja saya merasa bingung untuk "Apel" dan "apel" itu akan dikatakan sama atau tidak </Box>  

        </Box>
    );
};

export default Case1;