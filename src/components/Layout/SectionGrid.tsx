import React, { FC, ReactNode } from "react";

import Section from "../Layout/Section";
import {
    Flex,
    Box
} from "@chakra-ui/react";

interface IProps {
    children: ReactNode;
    title: string;
}

const SectionGrid: FC<IProps> = ({ children, title }) => (
    <Section>
        <Flex
            w="100%"
            gap={4}
            flexDirection={{ base: "column", md: "row" }}
        >
            <Box w={{ base: "100%", md: "22%" }} color="textSecond">
                {title} 
            </Box>
            <Box w={{ base: "100%", md: "78%" }}>
                {children}
            </Box>
        </Flex>
    </Section>
);

export default SectionGrid;