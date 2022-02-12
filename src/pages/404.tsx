import React from "react";

import FadeIn from "react-fade-in";

import BaseLayout from "../components/Layout/BaseLayout";
import Section from "../components/Layout/Section";
import Link from "../components/Link";

import { Text } from "@chakra-ui/react";

const NotFoundPage = () => (
    <BaseLayout>
		<FadeIn>
            <Section>
                <Text fontSize="2xl">404! Not much to see here... Go <Link toHref="/" color="#6666FF">Home!</Link></Text>
            </Section>
        </FadeIn>
    </BaseLayout>
);

export default NotFoundPage;