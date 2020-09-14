import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  margin-top: 50px;
  z-index: 2;
`;

export const SubHeaderContent = styled.div`
  width: 100%;
  height: 75px;
  border-bottom: 1px solid ${props => props.theme.colors.sixthary};

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    height: 100%;
    margin-left: -56px;

    li {
      display: flex;
      align-items: center;
      padding: 20px 25px 0 10px;
      height: 100%;

      &:hover {
        border-bottom: 2px solid ${props => props.theme.colors.eigthary};
      }

      &:focus-within {
        border-bottom: 2px solid ${props => props.theme.colors.ninethary};
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 14px;
        color: ${props => props.theme.colors.text};

        svg {
          margin-right: 10px;
        }
      }

      aside {
        width: 28px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        border-radius: 10px;
        font-size: 12px;
        background: ${props => props.theme.colors.sixthary};
      }
    }
  }
`;
