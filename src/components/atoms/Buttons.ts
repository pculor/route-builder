import styled from 'styled-components';


export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: white;
  float: right;
  background: 0;
  border: 0;
  cursor: pointer;

  &:hover .icon {
      color: ${({ theme }) => theme.colors.red};
  }
  
`;
