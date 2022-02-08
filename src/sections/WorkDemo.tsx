import React from "react";

import Section from "../components/Layout/Section";
import WorkDemoCard from "../components/WorkDemoCard";
import TextMarkerDemo from "../components/TextMarkerDemo";
import { Flex } from "@chakra-ui/react";

const WorkInteractive = () => ( 
    <Section>
        <Flex
            w="100%"
            gap={6}
            flexDirection={{ base: "column", md: "row" }}
        >
            <WorkDemoCard
                title="React Text Marker"
                url="https://github.com/devkosta/react-text-marker"
            >
                <TextMarkerDemo />
            </WorkDemoCard>
            <WorkDemoCard
                title="Soon..."
                url="https://github.com/devkosta"
            />
        </Flex>
    </Section>
);

export default WorkInteractive;