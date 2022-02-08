import React, { FC } from "react";

import SectionWithColumns from "../components/Layout/SectionWithColumns";

interface IProps {
    content: any;
}

const Status: FC<IProps> = ({ content }) => {
    const { frontmatter } = content;

    return (
        <SectionWithColumns title="Status" colWidth="22%">
            {frontmatter.description}
        </SectionWithColumns>
    );
};

export default Status;