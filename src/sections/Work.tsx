import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import FadeIn from "react-fade-in";

import SectionWithColumns from "../components/Layout/SectionWithColumns";
import ListItem from "../components/ListItem";

interface IProps {
    content: any;
}

const Work: FC<IProps> = ({ content }) => (
    <SectionWithColumns title="Recent Work" colWidth="22%">
        <FadeIn>
            {content.map((work: any) => (
                    <ListItem
                        title={work.node.frontmatter.title}
                        url={work.node.frontmatter.url}
                        date={work.node.frontmatter.date}
                        key={uuidv4()}
                    />
            ))}
        </FadeIn>
    </SectionWithColumns>
);

export default Work;