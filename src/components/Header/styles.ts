import styled from 'styled-components';

export const Container = styled.div`
  background: #2d2d30;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid #343434;

  > div {
    display: flex;
    align-items: center;

    input {
      background: #282a36;
      border: 0;
      border-radius: 6px;
      width: 330px;
      height: 40px;
      margin-left: 15px;
      padding: 0 15px;
      font-weight: 300;
    }

    a {
      text-decoration: none;
      margin-left: 15px;
      color: #cdcdcd;
      font-weight: 500;
      transition: 0.2s;
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
        width: 25px;
        height: 25px;
      }
    }

    aside:last-child {
      svg {
        margin-bottom: 3px;
      }
    }
  }
`;
