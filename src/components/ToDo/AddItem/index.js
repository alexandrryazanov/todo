import React, { useState, useContext } from "react";
import { AddItemWrapper, ButtonAdd, Input } from "./units";
import { MyContext } from "../../../context";

const AddItem = ({ onAdd }) => {
  const [input, setInput] = useState("");

  return (
    <AddItemWrapper>
      <Input
        placeholder={"Введите задачу..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ButtonAdd
        onClick={() => {
          onAdd(input);
          setInput("");
        }}
      >
        Добавить
      </ButtonAdd>
    </AddItemWrapper>
  );
};

export default AddItem;
