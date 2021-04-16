import React, { useContext } from "react";
import {
  Checkbox,
  ItemWrapper,
  Text,
  CheckBoxAndText,
  DeleteButton,
} from "./units";
import { MyContext } from "../../../context";

const Item = ({ id, text, completed, onClick, onDelete }) => {
  const colors = useContext(MyContext);
  return (
    <ItemWrapper>
      <CheckBoxAndText>
        <Checkbox
          {...{ colors }}
          checked={completed}
          onClick={() => onClick(id)}
        />
        <Text through={completed}>{text}</Text>
      </CheckBoxAndText>

      <DeleteButton onClick={() => onDelete(id)}>Х</DeleteButton>
    </ItemWrapper>
  );
};

export default Item;
