import styled from "styled-components"

export const LandingWrapper = styled.div`
    height: 796px;
    width: 100%;
`

export const Container = styled.div`
    background-image: url('assets/img/b 1.png');
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`

export const Content = styled.div`
    position: absolute;
    top: 185px;
    left: 169px;
    max-width: 700px;
    & h2 {
        color: #FFF;
        font-family: SF Pro Text;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 17px;
    }
    & p {
        color: #FFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
`

export const Slide = styled.div`
    margin: auto;
    padding-top: 390px;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    display: flex;
    padding: 14px;
    align-items: flex-start;
    gap: 10.87px;
    border-radius: 26.087px;
    background: #FFF;
    box-shadow: 0px 7.03125px 19.53125px 0px rgba(0, 0, 0, 0.06);
`

export const Right = styled.div`
    display: flex;
    padding: 14px;
    align-items: flex-start;
    gap: 10.87px;
    border-radius: 26.087px;
    background: #FFF;
    box-shadow: 0px 7.03125px 19.53125px 0px rgba(0, 0, 0, 0.06);
`