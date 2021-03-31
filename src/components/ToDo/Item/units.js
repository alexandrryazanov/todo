import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  display: flex;
  height: 20px;
  border-bottom: 1px solid grey;
  padding: 5px;
  margin: 5px;
  align-items: center;
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
    background-color: ${({ checked }) => (checked ? "orange" : "white")};
    border-radius: 100%;
  }
`;

export const Text = styled.div`
  text-decoration: ${({ through }) => (through ? "line-through" : "none")};
`;
