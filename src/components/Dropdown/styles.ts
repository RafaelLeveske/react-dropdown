import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DropDownHeader = styled.input`
  background: ${props => props.theme.colors.fourthary};
  border: 0;
  border-radius: 6px;
  width: 275px;
  height: 28px;
  margin-left: 15px;
  padding: 0 10px 0 10px;
  font-weight: 300;
  font-size: 14px;
  color: ${props => props.theme.colors.thirdary};

  &:focus {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    width: 550px;
    height: 33px;
    border: 1px solid ${props => props.theme.colors.secundary};
  }
`;

export const DropDownListContainer = styled.div`
  position: fixed;
  margin-left: 7px;
  top: 40px;
  z-index: 2;
`;

export const DropDownList = styled.ul`
  width: 548px;
  list-style: none;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.secundary};
  border-radius: 0 0 6px 6px;
  box-sizing: border-box;
  color: ${props => props.theme.colors.text};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid ${props => props.theme.colors.secundary};
  font-size: 14px;
  font-weight: 300;
  padding-left: 10px;

  &:last-child {
    border: 0;
  }

  &:hover {
    background: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.thirdary};
  }

  svg {
    margin-right: 12px;
  }
`;
