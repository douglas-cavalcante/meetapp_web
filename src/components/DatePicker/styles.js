import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const DatePicker = styled(DatePicker)`
  height: 60px;
  margin: 5px 0;
  border: transparent;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;

  border-radius: 5px;

  font-family: 'Roboto';
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 25px;
  &::placeholder {
    font-family: 'Roboto';
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
  }
`;
