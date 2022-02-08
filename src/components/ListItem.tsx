import React, { FC } from "react";

import Link from "./Link";
import {
    Flex,
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
            <Box>
                <Box
                    as="span"
                    mr={5}
                    fontFamily="Fira Code"
                    color="textSecond"
                >
                    {newDate.getFullYear()}
                </Box>
                <Link
                    toHref={url}
                    transition="0.13s ease-in-out"
                    _hover={{ ml: 3 }}
                >
                    {title}
                </Link>
            </Box>
            <BsArrowRight />
        </Flex>
    );
};

export default ListItem;