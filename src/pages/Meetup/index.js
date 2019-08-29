import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';

import { Content } from './styles';

export default function Meetup() {
  return (
    <Content>
      <Form>
        <Input name="title" placeholder="Título do meetup" />
        <Textarea
          name="description"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <Input name="date" type="date" placeholder="Data do meetup" />
        <Input name="localizacao" placeholder="Localização" />
        <button type="submit">Criar conta</button>
      </Form>
    </Content>
  );
}
