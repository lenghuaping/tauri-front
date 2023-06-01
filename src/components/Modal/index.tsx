import type { UseModalProps } from '@chakra-ui/react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

interface IModalProps extends UseModalProps {
  title: string;
  isOpen: boolean;
  onClose: UseModalProps['onClose'];
  footer?: any;
}

const ToolModal = (props: PropsWithChildren<IModalProps>) => {
  const { isOpen, onClose, children, footer, title, ...rest } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ToolModal;
