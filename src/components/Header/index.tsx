import React from 'react';
import { GoMarkGithub, GoBell, GoPlus, GoTriangleDown } from 'react-icons/go';

import { Container, HeaderContent } from './styles';
import avatar from '../../assets/avatar.jpeg';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <div>
          <GoMarkGithub size={40} />
          <input type="text" placeholder="Search or jump to..." />
          <a href="/teste">Pull requests</a>
          <a href="/teste">Issues</a>
          <a href="/teste">Marketplace</a>
          <a href="/teste">Explore</a>
        </div>

        <div>
          <button type="button">
            <GoBell size={20} />
          </button>
          <aside>
            <button type="button">
              <GoPlus size={20} />
              <GoTriangleDown size={15} />
            </button>
          </aside>
          <aside>
            <button type="button">
              <img src={avatar} alt="Avatar" />
              <GoTriangleDown size={15} />
            </button>
          </aside>
        </div>
      </HeaderContent>
    </Container>
  );
};

export default Header;
