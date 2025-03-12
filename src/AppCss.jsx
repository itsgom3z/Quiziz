import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background: #4caf50;
`;

export const OptionButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  background: ${(props) => (props.selected ? "#4caf50" : "#ddd")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.selected ? "#388e3c" : "#ccc")};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;
