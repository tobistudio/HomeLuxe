import styled from "styled-components"

export const IntroWrapper = styled.div`
    padding: 70px 0;
    max-width: 1274px;
    margin: auto;
`

export const Container = styled.div`
    display: flex;
    gap: 34px;
    & > div {
        flex: 1 1 0;
    }
`

export const Header = styled.div`
    & h2 {
        color: rgba(13, 13, 13, 0.90);
        font-family: SF Pro Text;
        font-size: 42px;
        font-style: normal;
        font-weight: 600;
        line-height: 55px; /* 130.952% */
    }
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Title = styled.div`
    color: rgba(13, 13, 13, 0.90);
    font-family: SF Pro Text;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Content = styled.div`
    color: rgba(30, 30, 30, 0.90);
    font-family: SF Pro Text;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    color: #D9AC84;
    margin: 0;
    gap: 20px;
    font-family: Khula;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 185%; /* 25.9px */
    cursor: pointer;
`