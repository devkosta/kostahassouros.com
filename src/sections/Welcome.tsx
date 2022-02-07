import React, { FC } from "react";

import Section from "../components/Layout/Section";
import { Text } from "@chakra-ui/react";

interface IProps {
    content: any;
}

const Welcome: FC<IProps> = ({ content }) => {
    const { frontmatter } = content;

    return (
        <Section>
            <Text fontSize="xl">{frontmatter.welcomeText}</Text>
        </Section>
    );
};

export default Welcome;