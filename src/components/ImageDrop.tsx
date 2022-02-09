import React,{ FC, useCallback } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";

import {
    Center,
    Icon,
    Text
} from "@chakra-ui/react";
import { BsArrowUp } from "react-icons/bs";
import { AiFillRocket } from "react-icons/ai";

interface IProps {
    onFileAccepted: ((files: FileWithPath[] ) => void);
}

const ImageDrop: FC<IProps> = ({ onFileAccepted }) => {
    const onDrop = useCallback((files: FileWithPath[]) => {
        onFileAccepted(files);
    }, [onFileAccepted]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, maxFiles: 2, multiple: true,
    });

    const text = isDragActive
        ? "Time to Drop!"
        : "Select Two Files...";

    return (
        <Center
            w="100%"
            h="20.1rem"
            p={10}
            cursor="pointer"
            borderRadius={10}
            border="2px"
            borderColor="gray.400"
            bg={isDragActive ? "gray.100" : "transparent"}
            _hover={{ bg: "gray.100" }}
            transition="background-color 0.2s ease"
            {...getRootProps()}
        >
            <input {...getInputProps()} />

            {isDragActive
                ? <Icon as={AiFillRocket} mr={2} />
                : <Icon as={BsArrowUp} mr={2} />
            } 
            <Text>{text}</Text>
        </Center>
    );
};

export default ImageDrop;