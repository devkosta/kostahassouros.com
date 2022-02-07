import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import SectionGrid from "../components/Layout/SectionGrid";
import ListItem from "../components/ListItem";

interface IProps {
    content: any;
}

const Notes: FC<IProps> = ({ content }) => (
    <SectionGrid title="Notes">
        {content.map((note: any) => (
            <ListItem
                title={note.node.frontmatter.title}
                url={note.node.frontmatter.url}
                date={note.node.frontmatter.date}
                key={uuidv4()}
            />
        ))}
    </SectionGrid>
);

export default Notes;