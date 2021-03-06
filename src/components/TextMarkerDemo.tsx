import React, { useState } from "react";
import { MarkedText } from "@devkosta/react-text-marker";

import { 
    VStack,
    HStack,
    Text,
    Input,
    Textarea,
    IconButton
} from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";
import { AiOutlineClear } from "react-icons/ai";

const TextMarkerDemo = () => {
    const initialColour = "D6BCFA";
    const initialMarkedWords = ["Hello, World", "some marked", "the text below", "test it"];
    const initialText = "Hello, World - This is some marked text. Edit the text below and test it out. Available on NPM.";

    const [colour, setColour] = useState<string>(initialColour);
    const [markedWord, setMarkedWord] = useState<string>("");
    const [markedWordsArr, setMarkedWordsArr] = useState<string[]>(initialMarkedWords);
    const [text, setText] = useState<string>(initialText);

    const handleColourEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColour(e.target.value);
    };

    const handleWordEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMarkedWord(e.target.value);
    };

    const handleWordAdd = () => {
        if (markedWord && text.includes(markedWord)) {
            setMarkedWordsArr(words => [...words, markedWord]);
            setMarkedWord("");
        }
    };

    const handleTextEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <VStack
            h="100%"
            spacing={4}
            alignItems="flex-start"
            justifyContent="space-between"
        >
            <Text
                maxW={{ base: "88vw", md: "300px" }}
                mb={2}
                fontSize="xl"
                noOfLines={3}
            >
                <MarkedText
                    textToMark={text || "This is available on NPM."}
                    isCaseSensitive={false}
                    markedWords={markedWordsArr}
                    markerColor={"#" + colour}
                />
            </Text>
            <Input
                placeholder="Hex Colour"
                value={colour}
                onChange={handleColourEdit}
            />
            <HStack w="100%" spacing={2}>
                <Input
                    placeholder="Mark a Word"
                    value={markedWord}
                    onChange={handleWordEdit}
                />
                <IconButton 
                    colorScheme="blue"
                    aria-label="Add Word"
                    icon={<HiPlus />} 
                    onClick={handleWordAdd}
                />
                <IconButton 
                    aria-label="Clear Words"
                    icon={<AiOutlineClear size={20} />} 
                    onClick={() => setMarkedWordsArr([])}
                />
            </HStack>
            <Textarea
                maxW={{ base: "88vw", md: "300px" }}
                h="8rem"
                lineHeight={1.65}
                placeholder="Text to Mark"
                resize="none"
                value={text}
                onChange={handleTextEdit}
            />
        </VStack>
    );
};

export default TextMarkerDemo;