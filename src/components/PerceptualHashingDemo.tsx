import React, { useState } from "react";
import axios from "axios";
import { FileWithPath } from "react-dropzone";

import { dataToHash, hammDist } from "../utils/perceptualHash";

import ImageDrop from "./ImageDrop";
import ModalItem from "./ModalItem";
import {
    VStack,
    HStack,
    Text,
    Flex,
    Box,
    IconButton,
    Button,
    Spinner,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";

const PerceptualHashingDemo = () => {
    const [currentFiles, setCurrentFiles] = useState<FileWithPath[]>([]);
    const [hashes, setHashes] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();

    const importFile = (files: FileWithPath[]) => {
        for (let i = 0; i < files.length; i++) {
            if (files[i].type !== "image/png" && files[i].type !== "image/jpeg") {
                toast({
                    description: `File type ${files[i].type} not accepted. Please upload either a PNG or JPEG file.`,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });

                return;
            }
        }

        setCurrentFiles(currentFiles.concat(files));
    };

    const handleButtonClick = async () => {
        if (currentFiles.length !== 2) {
            toast({
                description: `Uploaded ${currentFiles.length} files. You must upload 2 files.`,
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
            });

            return;
        }

        for (let i = 0; i < currentFiles.length; i++) {
            if (currentFiles[i]) {
                const formData = new FormData();
                formData.append("image", currentFiles[i], currentFiles[i].name);
                
                setIsLoading(true);

                await axios.post("https://devkosta-image-match.herokuapp.com/api/upload", formData)
                    .then((res) => {
                        setHashes(hashes => [...hashes, dataToHash(res.data.data.data)]);
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            }
        }

        setIsLoading(false);
        onOpen();
    };

    const handleResults = (): JSX.Element => {
        let result = 0;
        let resultPercent = 0;
        let resultStr = "";

        if (hashes[0] && hashes[1]) {
            result = hammDist(hashes[0], hashes[1]);
            resultPercent = (1 - (result / 16)) * 100;
        }

        if (result == 0) {
            resultStr = "These images are likely to be exactly the same!";
        }
        else if (result > 0 && result <= 2) {
            resultStr = "These images are very similar, but likely not exactly the same.";
        }
        else if (result > 2 && result <= 5) {
            resultStr = "These images are similar, but there are likely some differences.";
        }
        else if (result > 5 && result <= 10) {
            resultStr = "These images could be similar, but likely not.";
        }
        else if (result > 10 && result <= 16) {
            resultStr = "These images are likely not the same.";
        }

        return (
            <React.Fragment>
                <Text>{resultPercent}% Similiar ??? There are {result} Different Bits.</Text>
                <br />
                <Text>{resultStr}</Text>
            </React.Fragment>
        );
    };

    return (
        <VStack
            w="100%"
            h="100%"
            spacing={4}
            alignItems="flex-start"
            justifyContent="space-between"
        >
            <ImageDrop onFileAccepted={importFile} />
            <HStack w="100%">
                <Flex w="100%" alignItems="center" justifyContent="space-between">
                    <Button
                        rounded="md"
                        bg="green.100"
                    >
                        Selected: {currentFiles.length}
                    </Button>
                    <Box>             
                        <IconButton
                            mr={2}
                            aria-label="Start"
                            colorScheme="blue"
                            icon={isLoading ? <Spinner /> : <BsArrowRightShort size={26} />}
                            onClick={handleButtonClick}
                        />
                        <IconButton
                            aria-label="Clear"
                            icon={<AiOutlineClear size={20} />}
                            onClick={() => {
                                setCurrentFiles([]);
                                setHashes([]);
                            }}
                        />
                    </Box> 
                </Flex>
            </HStack>
            <ModalItem title="Results" isOpen={isOpen} onClose={onClose}>
                {handleResults()}
            </ModalItem>
        </VStack>
    );
};

export default PerceptualHashingDemo;