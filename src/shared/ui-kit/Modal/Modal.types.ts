import { ReactNode } from "react";

export type ModalCoreProps = {
  isOpen: boolean;
  onCancel?: () => void;
  hideModal: () => void;
  children: ReactNode;
  variant: "basic" | "result";
  wrapperClassName?: string;
};

export type ModalBasicProps = Pick<
  ModalCoreProps,
  "onCancel" | "children" | "wrapperClassName"
> & {
  withCloseBtn?: boolean;
  isOpen: boolean;
  onClose: () => void;
};
