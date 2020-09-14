import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 380px;
  padding: 0 15px 0 70px;

  img {
    width: 275px;
    height: 275px;
    border-radius: 50%;
    margin-top: -50px;
  }

  strong {
    font-size: 25px;
    font-weight: 500;
    margin-top: 15px;
    color: ${props => props.theme.colors.text};
  }

  span {
    font-size: 20px;
    font-weight: 400;
    margin-top: 3px;
    color: ${props => props.theme.colors.tenthary};
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-top: 15px;
    color: ${props => props.theme.colors.text};
  }

  button {
    width: 280px;
    height: 33px;
    margin-top: 18px;
    border-radius: 6px;
    background: ${props => props.theme.colors.thirdary};
    font-weight: normal;
    font-size: 14px;
    border: 1px solid ${props => props.theme.colors.sixthary};
    color: ${props => props.theme.colors.primary};
    transition: 0.2s;

    &:hover {
      background: ${props => shade(0.1, props.theme.colors.thirdary)};
    }
  }
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  svg {
    margin-right: 3px;
    color: #cdcdcd;
  }

  strong {
    font-size: 12px;
    margin: 0 6px 0 0;
    ${props => props.theme.colors.text}
  }

  span {
    font-size: 14px;
    margin-top: 0;
    ${props => props.theme.colors.tenthary}
  }

  p {
    margin: 0 7px 5px 7px;
  }
`;

export const RepoContent = styled.div`
  flex: 1;
  padding: 25px 60px 20px 0;
`;

export const RepoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  span {
    font-size: 17px;
    font-weight: 400;
    color: ${props => props.theme.colors.text};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.tenthary};
    font-size: 12px;

    &:hover {
      color: ${props => shade(0.1, props.theme.colors.tenthary)};
    }
  }
`;

export const RepoUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  list-style: none;
`;

export const RepoLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 120px;
  border: 1px solid ${props => props.theme.colors.sixthary};
  border-radius: 6px;
  padding: 0 12px;

  a {
    text-decoration: none;
    margin-bottom: 12px;
    color: ${props => props.theme.colors.secundary};
    font-weight: 500;
    font-size: 15px;
  }

  p {
    font-size: 12px;
    color: ${props => props.theme.colors.tenthary};
    margin-bottom: 20px;
    max-width: 400px;
  }
`;

export const RepoSpan = styled.span`
  font-size: 12px;
  color: ${props => props.theme.colors.eigthary};
`;

export const FooterSection = styled.section`
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    color: ${props => props.theme.colors.tenthary};
  }

  svg {
    margin-right: 1px;

    &:first-child {
      color: #f1e05a;
    }

    &:last-child {
      color: #cdcdcd;
    }
  }

  span {
    font-size: 12px;
    margin-right: 10px;
  }
`;
