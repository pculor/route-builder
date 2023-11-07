import styled from "styled-components";

export const ContentContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainColor};
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;

  div.geoTag {
    background: ${({ theme }) => theme.colors.darkGrey};
    color: white;
    border-radius: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.gradient.GREY};
  }
`;


export const SideBar = styled.div`
  height: 100vh;
  width: 20%;
  padding: ${({ theme }) => theme.spacing.smallSpace};
  background: ${({ theme }) => theme.colors.darkGrey};

  box-sizing: border-box;
  position: relative;

  .title {
    color:  ${({ theme }) => theme.colors.white};
  }
  
  .hr {
    border: ${({ theme }) => theme.colors.borderGrey} 3px solid;
  }
  
  .downloadRouteBtn {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: calc(100% - 40px);
    display: block;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.mainColorHover};
    color: ${({ theme }) => theme.colors.black};
    border: 0;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  
    &:hover {
      opacity: 0.7;
      background-color: ${({ theme }) => theme.colors.mainColorFocus};
    }
  }
`;