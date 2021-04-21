import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  display: flex;
  height: 20px;
  width: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-wrap: nowrap;
  border-bottom: 1px solid grey;
  padding: 5px;
  margin: 5px;
  align-items: center;
  justify-content: space-between;
`;

export const CheckBoxAndText = styled.div`
  display: flex;
`;

export const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  margin-right: 10px;
  border: 2px solid lightgray;
  cursor: pointer;

  &:after {
    width: 11px;
    height: 11px;
    content: "";
    background-color: ${({ checked, colors }) =>
      checked ? colors.primary : "white"};
    border-radius: 100%;
  }
`;

export const Text = styled.div`
  text-decoration: ${({ through }) => (through ? "line-through" : "none")};
`;

export const DeleteButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: red;
  }
  &:active {
    transform: translate(1px, 1px);
  }
`;
