import React, { FC, ReactNode } from "react";

import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody
} from "@chakra-ui/react";

interface IProps {
    children: ReactNode;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

const ModalItem: FC<IProps> = ({ children, title, isOpen, onClose }) => (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="container.sm"> 
            <ModalHeader px={4} py={3} fontFamily="inter">{title}</ModalHeader>
            <ModalBody px={4}>
                {children}
            </ModalBody>
            <ModalFooter px={4} py={3}>
                <Button colorScheme='blue' onClick={onClose}>Close</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);

export default ModalItem;