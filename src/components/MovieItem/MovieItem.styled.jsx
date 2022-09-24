import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  padding: 5px;
`;

export const LinkTo = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover:not(.active),
  :focus:not(.active) {
    color: #2196f3;
  }
`;
