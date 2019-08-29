import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/M.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/285/2323weabott@adorable.io.png"
              alt="img"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
