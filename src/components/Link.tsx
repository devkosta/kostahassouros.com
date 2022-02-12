import React, { FC, ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface IProps {
    children: ReactNode;
    toHref: string;
    target?: string;
}

const Link: FC<IProps & any> = ({ children, target="", toHref, ...props }) => (
    <Box 
        as="a"
        mr={4}
        href={toHref}
        target={target}
        transition="0.13s ease-in-out"
        _hover={{ color: "textMain" }}
        {...props}
    >
        {children}
    </Box> 
);

export default Link;