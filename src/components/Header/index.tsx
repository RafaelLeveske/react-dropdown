import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import {
  GoMarkGithub,
  GoBell,
  GoPlus,
  GoTriangleDown,
  GoThreeBars,
} from 'react-icons/go';

import Dropdown from '../Dropdown';

import { Container, HeaderContent, BreakPoint } from './styles';
import avatar from '../../assets/avatar.jpeg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <HeaderContent>
        <div>
          <BreakPoint>
            <GoThreeBars size={30} />
            <GoMarkGithub size={32} />
          </BreakPoint>

          <Dropdown />

          <a href="/teste">Pull requests</a>
          <a href="/teste">Issues</a>
          <a href="/teste">Marketplace</a>
          <a href="/teste">Explore</a>
        </div>

        <div>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={colors.secundary}
            offColor={shade(0.5, colors.fifthary)}
          />
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
