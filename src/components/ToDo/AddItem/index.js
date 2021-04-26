import React, { useEffect, useState } from "react";
import { AddItemWrapper, ButtonAdd, Input } from "./units";
import { useDispatch, useSelector } from "react-redux";
import { changeA, squareB } from "../../../redux/actions/rootActions";

const AddItem = ({ onAdd }) => {
  const [input, setInput] = useState("");

  useEffect(() => {}, []);

  const a = [1, 2, 3, 5].find(() => {});

  return (
    <AddItemWrapper>
      <Input
        placeholder={"Введите задачу..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ButtonAdd
        onClick={() => {
          setInput("");
          onAdd(input);
        }}
      >
        Добавить
      </ButtonAdd>
    </AddItemWrapper>
  );
};

export default AddItem;
