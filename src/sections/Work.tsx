import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import SectionGrid from "../components/Layout/SectionGrid";
import ListItem from "../components/ListItem";

interface IProps {
    content: any;
}

const Work: FC<IProps> = ({ content }) => (
    <SectionGrid title="Recent Work">
        {content.map((work: any) => (
            <ListItem
                title={work.node.frontmatter.title}
                url={work.node.frontmatter.url}
                date={work.node.frontmatter.date}
                key={uuidv4()}
            />
        ))}
    </SectionGrid>
);

export default Work;