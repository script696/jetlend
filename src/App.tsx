import React, { useState } from "react";
import { useModal } from "./shared/ui-kit/Modal/useModal";
import { ModalConfirm } from "./shared/ui-kit/Modal/ModalConfirm/ModalConfirm.component";

function App() {
  const { isOpen, closeModal, openModal } = useModal();
  const [isConfirmReq, setIsConfirmReq] = useState(true);

  const getConfirmHandler = () => {
    setIsConfirmReq(false);
    alert("Hello JetLend!");
  };

  return (
    <div className="App">
      <h1>Hello JetLend!</h1>
      <button onClick={openModal}>Нажмите чтобы чтото подтвердить</button>

      <ModalConfirm
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={getConfirmHandler}
        isConfirmRequired={isConfirmReq}
      />
    </div>
  );
}

export default App;
