import React from "react";
import { Checkbox, ItemWrapper, Text } from "./units";

const Item = ({ id, text, completed, onClick }) => {
  return (
    <ItemWrapper>
      <Checkbox checked={completed} onClick={() => onClick(id)} />
      <Text through={completed}>{text}</Text>
    </ItemWrapper>
  );
};

export default Item;
