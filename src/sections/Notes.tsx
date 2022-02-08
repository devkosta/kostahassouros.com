import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import SectionWithColumns from "../components/Layout/SectionWithColumns";
import ListItem from "../components/ListItem";

interface IProps {
    content: any;
}

const Notes: FC<IProps> = ({ content }) => (
    <SectionWithColumns title="Notes" colWidth="22%">
        {content.map((note: any) => (
            <ListItem
                title={note.node.frontmatter.title}
                url={note.node.frontmatter.url}
                date={note.node.frontmatter.date}
                key={uuidv4()}
            />
        ))}
    </SectionWithColumns>
);

export default Notes;