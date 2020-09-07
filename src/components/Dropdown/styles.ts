import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DropDownHeader = styled.input`
  background: #282a36;
  border: 0;
  border-radius: 6px;
  width: 280px;
  height: 30px;
  margin-left: 15px;
  padding: 0 20px;
  font-weight: 300;
  font-size: 14px;
  color: #cdcdcd;

  &:focus {
    width: 550px;
    height: 33px;
    border: 1px solid #d864bb;
  }
`;

export const DropDownListContainer = styled.div`
  position: fixed;
  margin-left: 7px;
  top: 40px;
  z-index: 2;
`;

export const DropDownList = styled.ul`
  width: 550px;
  list-style: none;
  background: #282a36;
  border: 1px solid #d864bb;
  border-radius: 0 0 6px 6px;
  box-sizing: border-box;
  color: #cdcdcd;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #d864bb;
  font-size: 14px;
  font-weight: 300;
  padding-left: 10px;

  &:last-child {
    border: 0;
  }

  &:hover {
    background: #d864bb;
    color: #fff;
  }

  svg {
    margin-right: 12px;
  }
`;
