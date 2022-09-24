import styled from 'styled-components';

export const DivWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  border-top: thick solid #800080;
  border-bottom: thick solid #800080;
`;
export const ImageWrapper = styled.div`
  margin-right: 20px;
`;

export const MovieHeader = styled.h2`
  margin-bottom: 20px;
`;

export const Details = styled.p`
  margin-bottom: 20px;
`;

export const GenresWrapper = styled.div`
  display: flex;
`;

export const Genres = styled.div`
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:first-child {
    margin-left: 25px;
  }
`;
