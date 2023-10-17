import styled from "styled-components"

export const ReviewWrapper = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
`

export const Container = styled.div`
    margin-top: 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 39px;
    
`

export const Title = styled.div`
    & p {
        color: #D9AC84;
        text-align: center;
        font-family: SF Pro Text;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 3.15px;
        text-transform: uppercase;
    }
    & h3 {
        color: #000;
        text-align: center;
        font-family: Khula;
        font-size: 42px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
        margin: 0;
    }
`

export const SlideButton = styled.div`
    position: absolute;
`