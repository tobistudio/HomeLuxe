import styled from "styled-components"

export const ContactWrapper = styled.div`
    max-width: 1280px;
    margin: auto;
    padding-top: 130px;
    display: flex;
    gap: 60px;
    flex-direction: column;
    padding-bottom: 160px;
    & h2 {
        text-align: center;
        color: #000;
        text-align: center;
        font-family: Khula;
        font-size: 55px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%; /* 88px */
        letter-spacing: -1.1px;
    }
    & > span {
        display: block;
        width: 745px;
        height: 7px;
        flex-shrink: 0;
        margin: auto;
        background-color: #000;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #000;
    text-align: center;
    font-family: Khula;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 51.2px */
    letter-spacing: -0.64px;
    & > div {
        display: flex;
        align-items: center;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    & p {
        color: #000;
        font-family: Khula;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 51.2px */
        letter-spacing: -0.64px;
    }
    & input {
        border: 3px solid #000;
        background: rgba(217, 217, 217, 0.00);
        width: 100%;
        padding: 33px 27px;
        color: rgba(0, 0, 0, 0.80);
        font-family: Khula;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 51.2px */
        letter-spacing: -0.64px;
    }

    & textarea {
        border: 3px solid #000;
        background: rgba(217, 217, 217, 0.00);
        width: 100%;
        padding: 33px 27px;
        color: rgba(0, 0, 0, 0.80);
        font-family: Khula;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 51.2px */
        letter-spacing: -0.64px;
    }
`

export const Button = styled.div`
    background: #000;
    width: 100%;
    padding: 30px 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    text-align: center;
    font-family: Khula;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 57.6px */
    letter-spacing: -0.72px;
    gap: 10px;
`