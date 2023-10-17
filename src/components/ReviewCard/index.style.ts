import styled from "styled-components"

export const ReviewCard = styled.div<{ bg: string }>`
    background-image: ${props => `url(${props.bg})`};
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 476px;
    position: relative;
    border-radius: 18.12px;
    box-shadow: 0px -1px 12px rgba(0, 0, 0, 0.25);
`

export const Content = styled.div`
    position: relative;
    background-color: #fff;
    width: 85%;
    border-radius: 18.12px;
    text-align: center;
    margin: auto;
    margin-top: 62%;
`

export const Avatar = styled.div`
    position: absolute;
    top: -28px;
    left: calc(50% - 35px);
    display: flex;
    padding: 8px;
    background-color: #fff;
    border-radius: 50px;
    justify-content: center;
    & img { 
        width: 50px;
        height: 50px;
        text-align: center;
        border-radius: 50px;
    }
`

export const TextArea = styled.div`
    padding-top: 38px;
    display: flex;
    flex-direction: column;
    gap: 17px;
`

export const HeaderArea = styled.div`
    & * {
        margin: 0;
    }
    & h3 {
        color: #000;
        text-align: center;
        font-family: Khula;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
    }
    & h4 {
        color: #1E1E1E;
        text-align: center;
        font-family: Khula;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`

export const Text = styled.div`
    color: var(--Dark-Blue, #000C36);
    text-align: center;
    font-family: Khula;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 252px;
    margin: auto;
`

export const StarItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const Star = styled.div`
    color: #F6973F;
`

export const NoStar = styled.div`
    color: #F6973F;
    opacity: 0.3;
`