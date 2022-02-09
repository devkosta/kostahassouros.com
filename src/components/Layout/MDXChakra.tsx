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
    ul: (rest: any) => (
        <UnorderedList
            px={3}
            alignSelf="center"
            fontSize="xl"
            {...rest}
        />
    ),
    li: (rest: any) => <ListItem {...rest} />,
    a: (rest: any) => (
        <Link
            as="a"
            color="blue.400"
            {...rest}
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