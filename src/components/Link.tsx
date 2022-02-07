import React, { FC, ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface IProps {
    children: ReactNode;
    toHref: string;
}

const Link: FC<IProps> = ({ children, toHref }) => (
    <Box 
        as="a"
        mr={4}
        href={toHref}
        target="_blank"
        transition="0.13s ease-in-out"
        _hover={{ color: "textMain" }}
    >
        {children}
    </Box> 
);

export default Link;