import React from 'react';
import { GoBook, GoRepo, GoProject, GoPackage } from 'react-icons/go';

import { Container, SubHeaderContent } from './styles';

const SubHeader: React.FC = () => {
  return (
    <Container>
      <SubHeaderContent>
        <ul>
          <li>
            <a href="/teste">
              <GoBook size={16} />
              <span>Overview</span>
            </a>
          </li>
          <li>
            <a href="/teste">
              <GoRepo size={16} />
              <span>Repositories</span>
            </a>
            <aside>61</aside>
          </li>
          <li>
            <a href="/teste">
              <GoProject size={16} />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="/teste">
              <GoPackage size={16} />
              <span>Packages</span>
            </a>
          </li>
        </ul>
      </SubHeaderContent>
    </Container>
  );
};

export default SubHeader;
