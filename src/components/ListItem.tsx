import React, { FC } from "react";

import {
    Flex,
    Text,
    Box
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

interface IProps {
    title: string;
    url: string;
    date: string;
}

const ListItem: FC<IProps> = ({ title, url, date }) => {
    const newDate = new Date(date);
    
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            _hover={{ color: "textMain" }}
        >
            <Text
                as="a"
                href={url}
                target="_blank"
            >
                <Box
                    as="span"
                    mr={3}
                    fontFamily="Fira Code"
                    color="textSecond"
                >
                    {newDate.getFullYear()}
                </Box>{" "}
                <Box 
                    as="span"
                    transition="0.13s ease-in-out"
                    _hover={{ ml: 3 }}
                >
                    {title}
                </Box>
            </Text>
            <BsArrowRight />
        </Flex>
    );
};

export default ListItem;