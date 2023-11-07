import styled from "styled-components";

export const ContentContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainColor};
  height: 100vh;
  width: 60%;
  overflow: hidden;

  div.geoTag {
    background: #383838;
    color: white;
    border-radius: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0px 0px 5px 0px rgba(56, 56, 56, 0.75);
  }
`;
