import React, { FC, ReactNode } from "react";

import Section from "./Section";
import {
    Flex,
    Box
} from "@chakra-ui/react";

interface IProps {
    children: ReactNode;
    title: string;
    colWidth: string;
}

const SectionWithColumns: FC<IProps> = ({ children, title, colWidth }) => (
    <Section>
        <Flex
            w="100%"
            gap={4}
            flexDirection={{ base: "column", md: "row" }}
        >
            <Box w={{ base: "100%", md: colWidth }} color="textSecond">
                {title} 
            </Box>
            <Box w={{ base: "100%", md: "100%" }}>
                {children}
            </Box>
        </Flex>
    </Section>
);

export default SectionWithColumns;