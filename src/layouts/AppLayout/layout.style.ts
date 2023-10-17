import styled from 'styled-components'

export const AppLayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const AppLayoutContainer = styled.div`
  contain: content;
  margin-top: -129px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 19px 78px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 999;
`

export const HeaderLeft = styled.div`
  display: flex;
  flex: 1 1 0;
  padding-left: 10px;
  & img {
    height: 32px;
    width: auto;
  }
`

export const HeaderRight = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  width: 154px;
  justify-content: space-around;
  border-radius: 100px;
  border: 0.86px solid #000;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  padding: 6px 4px;
  & p {
    color: #000;
    margin: 2px 0px 1px ;
    font-family: Khula;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & svg {
    width: 30px;
    height: 30px;
    color: black;
  }
`

export const badge = styled.div`
  position: absolute;
  top: 5px;
  right: 8px;
  background-color: #E7C99E;
  border-radius: 50%;
  width: 20px;
  height: 21px;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  color: white;
`

export const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 968px){
    display: none;
  }
`

export const IconArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 55px;
  & > * {
    cursor: pointer;
    margin-left: 30px;
    color: #D53552;
  }
`

export const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 360px;
  border-radius: 3px;
  color: #979797;
  border: 1px solid #979797;
  background-color: transparent;
  margin-left: 90px;
  padding-left: 40px;

  & input {
    background-color: transparent;
    border: none;
    outline: none;
    color: #979797;
  }

  & div {

  }

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.3);
  }

  @media screen and (max-width: 1280px) {
    width: 100px;
    padding: 0;
    border: none;
    input {
      display: none;
    }
    margin-left: 20px;
  }
`

export const FooterWrapper = styled.div`
  height: 462px;
  background-color: #000;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  color: white;
  padding-top: 118px  ;
  display: flex;
  flex-direction: column;
  gap: 100px;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  color: #FFF;
  font-family: Khula;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 24px */
  opacity: 0.8;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & img {
    width: 130px;
  }
`

export const Right = styled.div`
  display: flex;
  cursor: pointer;
  gap: 80px;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & p {
    color: #FFF;
    font-family: Khula;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%; /* 24px */
    opacity: 0.8;
    display: flex;
    align-items: center;
  }
  & h2 {
    color: #FFF;
    font-family: DM Sans;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.232px;
  }
  & img {
    margin-right: 16px;
  }
`

export const FooterItem = styled.div`

`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  color: #FFF;
  font-family: Khula;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 24px */
  opacity: 0.8;
  & > div {
    display: flex;
    gap: 34px;
  }
`