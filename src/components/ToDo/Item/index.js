import React, { useContext } from "react";
import {
  Checkbox,
  ItemWrapper,
  Text,
  CheckBoxAndText,
  DeleteButton,
} from "./units";
import { MyContext } from "../../../context";
import { connect } from "react-redux";

const Item = ({ id, text, completed, onClick, onDelete, a, changeA }) => {
  const colors = useContext(MyContext);
  return (
    <ItemWrapper>
      <CheckBoxAndText>
        <Checkbox
          {...{ colors }}
          checked={completed}
          onClick={() => onClick(id)}
        />
        <Text through={completed}>{text + a}</Text>
      </CheckBoxAndText>

      <DeleteButton onClick={() => onDelete(id)}>Х</DeleteButton>
      <button onClick={() => changeA(a + 1)}>Сменить A</button>
    </ItemWrapper>
  );
};

const mapStateToProps = (state) => ({ a: state.a });
const mapDispatchToProps = {
  changeA: (newA) => ({ type: "CHANGE_A", payload: newA }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
