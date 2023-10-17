import { ModalBasicProps } from "../Modal.types";
import React, { FC, useEffect, useState } from "react";
import { ModalBasic } from "../ModalBasic/ModalBasic.component";
import styles from "./ModalConfirm.module.css";

const DELAY_IN_SEC = 5;

type ModalConfirmProps = {
  onConfirm: () => void;
  delay?: number;
  isConfirmRequired?: boolean;
} & Omit<ModalBasicProps, "children">;

export const ModalConfirm: FC<ModalConfirmProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isConfirmRequired = false,
}) => {
  const [confirmTimeout, setConfirmTimeout] = useState(0);

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  useEffect(() => {
    setConfirmTimeout(isConfirmRequired ? DELAY_IN_SEC : 0);
  }, [isConfirmRequired]);

  useEffect(() => {
    if (!isConfirmRequired || !isOpen) return;

    const intervalId = setInterval(
      () => setConfirmTimeout((prevState) => prevState - 1),
      1000
    );

    setTimeout(() => {
      clearInterval(intervalId);
    }, DELAY_IN_SEC * 1000);

    return () => {
      clearInterval(intervalId);
      setConfirmTimeout(DELAY_IN_SEC);
    };
  }, [isOpen]);

  return (
    <ModalBasic isOpen={isOpen} onClose={onClose}>
      <h2>Согласие с правилами</h2>
      <div className={styles["content"]}>
        <p>
          Для данной функции применяются особые условия и правила пользования,
          их необходимо подтвердить, нажав на кнопку Подтвердить»
        </p>
      </div>
      <div className={styles["bottom"]}>
        <button onClick={onClose}>Отмена</button>
        <button onClick={handleConfirm} disabled={!!confirmTimeout}>
          {confirmTimeout ? `Подтвердить (${confirmTimeout})` : "Подтвердить"}
        </button>
      </div>
    </ModalBasic>
  );
};
