import React from 'react';
import { GoOrganization, GoStar, GoPrimitiveDot } from 'react-icons/go';

import avatar from '../../assets/avatar.jpeg';

import {
  Container,
  ProfileContent,
  InfoContent,
  RepoContent,
  RepoHeader,
  RepoUl,
  RepoLi,
  FooterSection,
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <ProfileContent>
        <img src={avatar} alt="Avatar" />
        <strong>Rafael Vieira</strong>
        <span>Rafael Leveske</span>
        <p>Full stack developer.</p>
        <button type="button">Edit profile</button>
        <InfoContent>
          <GoOrganization size={15} />
          <strong>1</strong>
          <span>follower</span>
          <p>.</p>

          <strong>4</strong>
          <span>following</span>
          <p>.</p>

          <GoStar size={18} />
          <strong>1</strong>
        </InfoContent>
      </ProfileContent>
      <RepoContent>
        <RepoHeader>
          <span>Popular repositories </span>
          <a href="/teste">Customize your pins</a>
        </RepoHeader>

        <RepoUl>
          <RepoLi>
            <a href="/teste">Comanda-App-Senac</a>
            <p>
              Projeto destinado a gerenciamento de anamnese de clínicas de
              psicologia.
            </p>
            <FooterSection>
              <GoPrimitiveDot size={25} />
              <span>JavaScripit</span>
              <GoStar size={18} />
              <span>1</span>
            </FooterSection>
          </RepoLi>

          <RepoLi>
            <a href="/teste">Comanda-App-Senac</a>
            <p>
              Projeto destinado a gerenciamento de anamnese de clínicas de
              psicologia.
            </p>
            <FooterSection>
              <GoPrimitiveDot size={20} />
              <span>JavaScripit</span>
              <GoStar size={18} />
              <span>1</span>
            </FooterSection>
          </RepoLi>

          <RepoLi>
            <a href="/teste">Comanda-App-Senac</a>
            <p>
              Projeto destinado a gerenciamento de anamnese de clínicas de
              psicologia.
            </p>
            <FooterSection>
              <GoPrimitiveDot size={20} />
              <span>JavaScripit</span>
              <GoStar size={18} />
              <span>1</span>
            </FooterSection>
          </RepoLi>

          <RepoLi>
            <a href="/teste">Comanda-App-Senac</a>
            <p>
              Projeto destinado a gerenciamento de anamnese de clínicas de
              psicologia.
            </p>
            <FooterSection>
              <GoPrimitiveDot size={20} />
              <span>JavaScripit</span>
              <GoStar size={18} />
              <span>1</span>
            </FooterSection>
          </RepoLi>

          <RepoLi>
            <a href="/teste">Comanda-App-Senac</a>
            <p>
              Projeto destinado a gerenciamento de anamnese de clínicas de
              psicologia.
            </p>
            <FooterSection>
              <GoPrimitiveDot size={20} />
              <span>JavaScripit</span>
              <GoStar size={18} />
              <span>1</span>
            </FooterSection>
          </RepoLi>

          <RepoLi>
            <a href="/teste">Comanda-App-Senac</a>
            <p>
              Projeto destinado a gerenciamento de anamnese de clínicas de
              psicologia.
            </p>
            <FooterSection>
              <GoPrimitiveDot size={20} />
              <span>JavaScripit</span>
              <GoStar size={18} />
              <span>1</span>
            </FooterSection>
          </RepoLi>
        </RepoUl>
      </RepoContent>
    </Container>
  );
};
export default Profile;
