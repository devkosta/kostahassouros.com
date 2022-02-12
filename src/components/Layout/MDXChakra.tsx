import React, { FC, ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import {
    UnorderedList,
    ListItem,
    Link
} from "@chakra-ui/react";

interface IProps {
    children: string & ReactNode;
}

const mdComponents = {
    ul: (props: any) => (
        <UnorderedList
            px={3}
            alignSelf="center"
            fontSize="xl"
            {...props}
        />
    ),
    li: (props: any) => <ListItem {...props} />,
    a: (props: any) => (
        <Link
            as="a"
            color="blue.400"
            target="_blank"
            {...props}
        />
    ),
};

const MDXChakra: FC<IProps> = ({ children }) => {
	return (
		<MDXProvider components={mdComponents}>
			<MDXRenderer>
				{children}
			</MDXRenderer>
		</MDXProvider>
	);
};

export default MDXChakra;