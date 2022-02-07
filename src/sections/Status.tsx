import React, { FC } from "react";

import SectionGrid from "../components/Layout/SectionGrid";

interface IProps {
    content: any;
}

const Status: FC<IProps> = ({ content }) => {
    const { frontmatter } = content;

    return (
        <SectionGrid title="Status">
            {frontmatter.description}
        </SectionGrid>
    );
};

export default Status;