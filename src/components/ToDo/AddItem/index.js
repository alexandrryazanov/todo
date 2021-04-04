import React, { useState } from "react";
import { AddItemWrapper, ButtonAdd, Input } from "./units";

const AddItem = ({ onAdd }) => {
  const [input, setInput] = useState("");
  return (
    <AddItemWrapper>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <ButtonAdd onClick={() => onAdd(input)}>Добавить</ButtonAdd>
    </AddItemWrapper>
  );
};

export default AddItem;
