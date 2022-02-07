import React from "react";

import Section from "../components/Layout/Section";
import TextMarkerDemo from "../components/TextMarkerDemo";
import { Flex } from "@chakra-ui/react";

const WorkInteractive = () => ( 
    <Section>
        <Flex
            w="100%"
            gap={6}
            flexDirection={{ base: "column", md: "row" }}
        >
            <TextMarkerDemo />
            <TextMarkerDemo />
        </Flex>
    </Section>
);

export default WorkInteractive;