import React from "react";

import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from "./DeleteModalStyle";

interface DeleteModalProps {
  postId: number;
  onConfirm: (id: number) => void;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ postId, onConfirm, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Aviso</ModalHeader>
        <ModalBody>Deseja realmente deletar esse post?</ModalBody>
        <ModalFooter>
          <ModalButton onClick={onClose}>Cancelar</ModalButton>
          <ModalButton onClick={() => onConfirm(postId)} primary>
            Confirmar
          </ModalButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DeleteModal;
