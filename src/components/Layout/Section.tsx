import React, { FC, ReactNode } from "react";

import { Box } from "@chakra-ui/react";

const Section: FC<ReactNode> = ({ children }) => (
    <Box as="section" pt={{ base: "2rem", md: "4rem"}} pb="1rem">{children}</Box>
);

export default Section;