import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Section from "../components/Layout/Section";
import WorkDemoCard from "../components/WorkDemoCard";
import TextMarkerDemo from "../components/TextMarkerDemo";
import { Flex } from "@chakra-ui/react";

const WorkInteractive = () => {
    const data = useStaticQuery(graphql`
        {
            cardOne: mdx(fileAbsolutePath: {regex: "/index/work/ReactTextMarker/"}) {
                frontmatter {
                    title
                    url
                }
                body
            },
            cardTwo: mdx(fileAbsolutePath: {regex: "/index/work/PerceptualHashing/"}) {
                frontmatter {
                    title
                    url
                }
                body
            },
        }   
    `);
       
    const { cardOne, cardTwo } = data;
    
    return (
        <Section>
            <Flex
                w="100%"
                gap={6}
                flexDirection={{ base: "column", md: "row" }}
            >
                <WorkDemoCard
                    title={cardOne.frontmatter.title}
                    url={cardOne.frontmatter.url}
                    info={cardOne.body}
                >
                    <TextMarkerDemo />
                </WorkDemoCard>
                <WorkDemoCard
                    title={cardTwo.frontmatter.title}
                    url={cardOne.frontmatter.url}
                    info={cardTwo.body}
                />
            </Flex>
        </Section>
    );
};

export default WorkInteractive;