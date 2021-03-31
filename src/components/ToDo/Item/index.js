import React from "react";
import { Checkbox, ItemWrapper, Text } from "./units";

const Item = ({ text, completed }) => {
  return (
    <ItemWrapper>
      <Checkbox checked={completed} />
      <Text through={completed}>{text}</Text>
    </ItemWrapper>
  );
};

export default Item;
