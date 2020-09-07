import styled from 'styled-components';

export const Container = styled.div`
  background: #2d2d30;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #343434;

  > div {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      margin-left: 13px;
      color: #cdcdcd;
      font-weight: 500;
      transition: 0.2s;
      font-size: 14px;
    }

    a:hover {
      opacity: 0.8;
      color: #aa98fd;
    }
  }

  div {
    display: flex;
    align-items: center;

    button {
      border: 0;
      background: transparent;
      color: #cdcdcd;
      transition: 0.2s;
    }

    button:hover {
      opacity: 0.8;
      color: #aa98fd;
    }

    aside {
      margin-left: 15px;
      display: flex;
      align-items: baseline;

      svg {
        margin-left: 5px;
      }

      img {
        border-radius: 50%;
        width: 20px;
        height: 20px;
      }
    }

    aside:last-child {
      svg {
        margin-bottom: 3px;
      }
    }
  }
`;
