import React, { FC, ReactNode } from "react";

import Link from "../components/Link";
import { Box } from "@chakra-ui/react";

interface IProps {
    children?: ReactNode;
    title: string;
    url: string;
}

const WorkDemoCard: FC<IProps> = ({ children, title, url }) => (  
    <Box
        w="100%"
        h="auto"
        p={6}
        rounded="xl"
        border="1px"
        borderColor="#718096"
    >
        <Box mb={4}>
            <Link toHref={url}>{title}</Link>
        </Box>
        <Box>{children}</Box>
    </Box>
);

export default WorkDemoCard;