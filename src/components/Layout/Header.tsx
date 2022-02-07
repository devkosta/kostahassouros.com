import React from "react";

import Link from "../Link";
import {
    Flex,
    Box
} from "@chakra-ui/react";

const Header = () => {
    return (
        <Flex
            w="100%"
            h={16}
            alignItems="center"
            justifyContent="space-between"
        >
            <Link toHref="#">Kosta Hassouros</Link>
            <Box>{new Date().getFullYear()}</Box> 
        </Flex>
    );
};

export default Header;