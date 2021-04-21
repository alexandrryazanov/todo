import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../../redux/actions/rootActions";

const Filters = ({ colors }) => {
  const dispatch = useDispatch();

  return (
    <div>
      Фильтр:&nbsp;
      <button
        onClick={() => dispatch(changeFilter("uncompleted"))}
        style={{ color: "black" }}
      >
        X
      </button>
      <button
        onClick={() => dispatch(changeFilter("completed"))}
        style={{ color: "black" }}
      >
        V
      </button>
      <button
        onClick={() => dispatch(changeFilter("all"))}
        style={{ color: colors.primary }}
      >
        Все
      </button>
    </div>
  );
};

export default Filters;
