import React from 'react';
import { GoMarkGithub, GoBell, GoPlus, GoTriangleDown } from 'react-icons/go';

import Dropdown from '../Dropdown';

import { Container, HeaderContent } from './styles';
import avatar from '../../assets/avatar.jpeg';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <div>
          <GoMarkGithub size={32} />

          <Dropdown />

          <a href="/teste">Pull requests</a>
          <a href="/teste">Issues</a>
          <a href="/teste">Marketplace</a>
          <a href="/teste">Explore</a>
        </div>

        <div>
          <button type="button">
            <GoBell size={16} />
          </button>
          <aside>
            <button type="button">
              <GoPlus size={16} />
              <GoTriangleDown size={12} />
            </button>
          </aside>
          <aside>
            <button type="button">
              <img src={avatar} alt="Avatar" />
              <GoTriangleDown size={12} />
            </button>
          </aside>
        </div>
      </HeaderContent>
    </Container>
  );
};

export default Header;
