import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import SectionWithColumns from "../components/Layout/SectionWithColumns";
import ListItem from "../components/ListItem";

interface IProps {
    content: any;
}

const Work: FC<IProps> = ({ content }) => (
    <SectionWithColumns title="Recent Work" colWidth="22%">
        {content.map((work: any) => (
            <ListItem
                title={work.node.frontmatter.title}
                url={work.node.frontmatter.url}
                date={work.node.frontmatter.date}
                key={uuidv4()}
            />
        ))}
    </SectionWithColumns>
);

export default Work;