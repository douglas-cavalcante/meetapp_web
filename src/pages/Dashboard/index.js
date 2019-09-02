import React, { useEffect, useState } from 'react';

import { format, parseISO, isBefore } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [organizations, setorganizations] = useState([]);

  useEffect(() => {
    async function loadOrganizations() {
      const response = await api.get('organizations');

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = response.data.map(meetup => {
        const compareDate = utcToZonedTime(parseISO(meetup.date), timezone);
        const dateFormatted = format(
          utcToZonedTime(parseISO(meetup.date), timezone),
          "d 'de' MMMM, 'às ' HH'h'",
          {
            locale: ptBR,
          }
        );

        const meetups = {
          ...meetup,
          dateFormatted,
          past: isBefore(compareDate, new Date()),
        };

        return meetups;
      });

      setorganizations(data);
    }

    loadOrganizations();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button" onClick={() => history.push('/meetup/new')}>
          <MdAddCircleOutline size={18} color="#fff" /> <span>Novo meetup</span>
        </button>
      </header>

      <ul>
        {organizations.map(meetup => (
          <Meetup key={meetup.id} past={meetup.past}>
            <strong>{meetup.title}</strong>
            <span>
              {meetup.dateFormatted}
              <button
                type="button"
                onClick={() => history.push(`/details/${meetup.id}`)}
              >
                <MdChevronRight size={24} />
              </button>
            </span>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
