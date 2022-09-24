import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackGoButton = styled(Link)`
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Links = styled(Link)`
  margin-bottom: 10px;
  &.active {
    color: #1e90ff;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #1e90ff;
  }
`;

export const AddInfo = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: thick solid #800080;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Info = styled.p`
  margin-bottom: 15px;
`;
