import React from "react";
import { Modal } from "../ui/modal";
import { Form } from "../form";

export const Todo = ({ firstName, lastName, id, setData }) => {
  const [open, setOpen] = React.useState(false);
  const deleteItem = () => {
    setData(p => p.filter(item => item.id !== id));
  };

  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div>
        <h1>{firstName}</h1>
        <p>{lastName}</p>
        <button onClick={deleteItem}>delete</button>
        <button onClick={openModal}>Edit</button>
      </div>
      <Modal isOpen={open} close={setOpen}>
        <Form edit id={id} close={setOpen} setData={setData} />
      </Modal>
    </>
  );
};
