import React, { FC } from "react";
import { ModalBasicProps } from "../Modal.types";
import { ModalCore } from "../ModalCore.component";
import { ReactComponent as CloseGradient } from "../../../assets/svg/close.svg";

export const ModalBasic: FC<ModalBasicProps> = ({
  children,
  wrapperClassName,
  onCancel,
  withCloseBtn = true,
  onClose,
  isOpen,
}) => {
  return (
    <ModalCore
      isOpen={isOpen}
      variant="basic"
      hideModal={onClose}
      wrapperClassName={wrapperClassName}
      onCancel={onCancel}
    >
      {withCloseBtn && (
        <div className="flex justify-end">
          <CloseGradient className="cursor-pointer" onClick={onClose} />
        </div>
      )}
      {children}
    </ModalCore>
  );
};
