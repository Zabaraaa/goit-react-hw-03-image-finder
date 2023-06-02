import styled from "styled-components";

export const Form = styled.form`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #99CCFF;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

`
export const Input = styled.input`
display: inline-block;
  width: 300px;
  font: inherit;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
}
`

export const Button = styled.button`
display: inline-block;
  width: 70px;
  height: 25px;
  border-radius: 5px;
  border: none;
  margin-right: 5px;
  cursor: pointer;
  }

`