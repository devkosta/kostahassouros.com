import React from "react";

import BaseLayout from "../components/Layout/BaseLayout";
import Section from "../components/Layout/Section";

import { Text } from "@chakra-ui/react";

const NotFound = () => (
    <BaseLayout>
        <Section>
            <Text fontSize="2xl">404! Not much to see here...</Text>
        </Section>
    </BaseLayout>
);

export default NotFound;