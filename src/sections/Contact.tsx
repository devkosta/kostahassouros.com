import React, { FC } from "react";

import SectionGrid from "../components/Layout/SectionGrid";
import Link from "../components/Link";

interface IProps {
    content: any;
}

const Contact: FC<IProps> = ({ content }) => {
    const { frontmatter } = content;

    return (
        <SectionGrid title="Contact">
            {frontmatter.contact.map((item: string[]) => (
                <Link toHref={item[1]} key={item[1]}>{item[0]}</Link>
            ))}
        </SectionGrid>
    );
};

export default Contact;