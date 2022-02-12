import React, { FC, ReactNode } from "react";

import newTheme from "../../styles/theme";

import Header from "./Header";
import {
    ChakraProvider,
    ColorModeProvider,
    Container,
    VStack
} from "@chakra-ui/react";

interface IProps {
    children: ReactNode;
}

const BaseLayout: FC<IProps> = ({ children }) => (
    <ChakraProvider resetCSS theme={newTheme}>
        <ColorModeProvider options={newTheme.config} />
        <Container maxW="container.md">
            <Header />
            <VStack spacing={10} pb={10}>
                {children}
            </VStack>
        </Container>
    </ChakraProvider>
);

export default BaseLayout;