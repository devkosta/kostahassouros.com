import React from "react";
import { MarkedText } from "@devkosta/react-text-marker";

import Link from "../components/Link";
import { Box, VStack } from "@chakra-ui/react";

const TextMarkerDemo = () => (  
    <Box
        w="100%"
        h="30rem"
        px={5}
        py={4}
        rounded="xl"
        border="1px"
        borderColor="#718096"
    >
        <VStack h="100%" alignItems="flex-start" justifyContent="space-between">
            <Link toHref="https://github.com/DevKosta/react-text-marker">React Text Marker</Link>
            {/* <MarkedText
                textToMark="Hello, World! This is some marked text. Change the input text and test it out!"
                isCaseSensitive={true}
                markedWords={["Hello, World!", "marked", "Change"]}
                markerColor="#9AE6B4"
            /> */}
        </VStack>
        
    </Box>
);

export default TextMarkerDemo;