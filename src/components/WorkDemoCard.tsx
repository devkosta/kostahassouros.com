import React, { FC, ReactNode } from "react";

import Link from "./Link";
import ModalItem from "./ModalItem";
import MDXChakra from "./Layout/MDXChakra";
import {
    Box,
    Flex,
    IconButton,
    useDisclosure
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface IProps {
    children?: ReactNode;
    title: string;
    url: string;
    info: string;
}

const WorkDemoCard: FC<IProps> = ({ children, title, url, info }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            w="100%"
            h="auto"
            p={6}
            rounded="xl"
            border="1px"
            borderColor="#718096"
        >
            <Flex
                mb={4}
                alignItems="center"
                justifyContent="space-between"
            >
                <Link toHref={url}>{title}</Link>
                <IconButton
                    aria-label="Info"
                    icon={<AiOutlineInfoCircle size={20} />}
                    onClick={onOpen}
                />
            </Flex>
            <Box>{children}</Box>
            <ModalItem title={title} isOpen={isOpen} onClose={onClose}>
                <MDXChakra>{info}</MDXChakra>
            </ModalItem>
        </Box>
    );
};

export default WorkDemoCard;