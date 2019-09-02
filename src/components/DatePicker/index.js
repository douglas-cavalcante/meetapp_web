import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import 'react-datepicker/dist/react-datepicker.css';

import { useField } from '@rocketseat/unform';

export default function DatePicker({ name, placeholder }) {
  registerLocale('pt-BR', ptBR);

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);
  const ref = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line
  }, [ref.current, fieldName]);

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        minDate={new Date()}
        ref={ref}
        timeFormat="HH:mm"
        dateFormat="dd/MM/yyyy - HH:mm"
        placeholderText={placeholder}
        autoComplete="off"
        locale="pt-BR"
        timeCaption="Horário"
        timeIntervals={60}
        showTimeSelect
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
