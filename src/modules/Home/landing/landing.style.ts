import styled from "styled-components"

export const LandingWrapper = styled.div`
    background-image: url('assets/img/Background V2.png');
    background-size: cover;
    background-position: center;
    height: 1084px;
    background-repeat: no-repeat;
    position: relative;
`

export const Content = styled.div`
    margin: auto;
    padding-top: 190px;
    max-width: 985px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    & h2 {
        color: #232323;
        text-align: center;
        font-family: Khula;
        font-size: 62.767px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%; /* 78.458px */
        text-transform: capitalize;
        margin-bottom: 20px;
    }
    & p {
        color: rgba(0, 0, 0, 0.75);
        text-align: center;
        font-family: Khula;
        font-size: 21px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 38.4px */
        letter-spacing: -0.48px;
        margin: 0;
        margin-bottom: 40px;
        max-width: 658px;
    }
`

export const Button = styled.div`
    display: flex;
    width: 212px;
    padding: 12px 0px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border: 0.862px solid rgba(255, 255, 255, 0.60);
    background: #0172DA;
    backdrop-filter: blur(4px);
    color: #fff;
    cursor: pointer;
`