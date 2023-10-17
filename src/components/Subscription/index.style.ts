import styled from 'styled-components'

export const SubscriptionWrapper = styled.div`
    max-width: 1020px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 120px;
    margin-bottom: 96px;
    & h2 {
        margin: 0;
        color: #25313C;
        font-family: Khula;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`

export const EmailPart = styled.div`
    display: flex;
    background: #FFF;
    height: 57px;
    & input {
        width: 380px;
        padding: 15px;
    }
`

export const Button = styled.div`
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Khula;
    font-size: 18px;
    padding: 17px 15px;
    background: #000;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.72px;
`