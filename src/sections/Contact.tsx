import React, { FC } from "react";

import SectionWithColumns from "../components/Layout/SectionWithColumns";
import Link from "../components/Link";

interface IProps {
    content: any;
}

const Contact: FC<IProps> = ({ content }) => {
    const { frontmatter } = content;

    return (
        <SectionWithColumns title="Contact" colWidth="22%">
            {frontmatter.contact.map((item: string[]) => (
                <Link toHref={item[1]} key={item[1]}>{item[0]}</Link>
            ))}
        </SectionWithColumns>
    );
};

export default Contact;