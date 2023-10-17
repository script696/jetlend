import React, { FC, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { ModalCoreProps } from './Modal.types';
import {useOnClickOutside} from "../../hooks/useOnClickOutside";

/**
 * Компонент содержит общую логику для всех модальных окон
 */
export const ModalCore: FC<ModalCoreProps> = ({ isOpen, onCancel, hideModal, variant, children, wrapperClassName }) => {
  const modalRef = useRef(null);

  const handleHideModal = () => {
    hideModal();

    if (onCancel) onCancel();
  };

  useOnClickOutside(modalRef, handleHideModal);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = '';
    };
  }, [isOpen]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className={styles['underlay']}>
          <div className={[styles['modal'], styles[`modal-${variant}`], wrapperClassName].join(' ')} ref={modalRef}>
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
};
