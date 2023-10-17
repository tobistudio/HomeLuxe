import styled from "styled-components"

export const Public = styled.div`
    padding-top: 150px;
`

export const BlogContentWrapper = styled.div`
    max-width: 1000px;
    margin: auto;
    & h2 {
        max-width: 700px;
        margin: auto;
        color: var(--Black, #25313C);
        font-family: Khula;
        font-size: 55px;
        font-style: normal;
        font-weight: 400;
        line-height: 69px; /* 125.455% */
        margin-bottom: 30px;
    }
    & > img {
        width: 100%;
    }
`

export const SubContent = styled.div`
    display: flex;
    max-width: 700px;
    margin: auto;
    align-items: center;
    gap: 18px;
    color: rgba(0, 0, 0, 0.50);
    font-family: Khula;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 27.2px */
    margin-bottom: 60px;
`

export const Content = styled.div`
    max-width: 700px;
    color: var(--Black, #25313C);
    font-family: Khula;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 28.8px */
    margin: auto;
    margin-top: 68px;
`

export const Author = styled.div`
    display: flex;
    padding: 60px 0;
    gap: 21px;
    max-width: 700px;
    margin: auto;
    & > div {
        & *{
            margin: 0;
        }
        & h3 {
            color: #000;
            font-family: Khula;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 1.4px;
            text-transform: uppercase;
            opacity: 0.57;
        }
        & h2 {
            color: var(--Black, #25313C);
            font-family: Khula;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        & p {
            color: var(--Grey, #6D7D8B);
            font-family: Khula;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 141.2%; /* 24.004px */
        }
    }
`

export const Between = styled.div`
    display: flex;
    background-color: #000;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 235px;
    & h4 {
        color: #FFF;
        font-family: Khula;
        font-size: 50px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        color: #FFF;
    }
    & button {
        border: 0.86px solid rgba(255, 255, 255, 0.60);
        background: #FFF;
        backdrop-filter: blur(4px);
        display: flex;
        width: 167px;
        padding: 10px 45px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        align-content: space-between;
        gap: 20px;
        color: #000;
        text-align: center;
        font-family: Khula;
        font-size: 26.58px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`

export const BlogContainer = styled.div`
    display: flex;
    max-width: 1280px;
    justify-content: space-between;
    margin: auto;
    padding: 85px 0;
`

export const BlogLists = styled.div`
    background-image: url('assets/img/dddepth-233 1.png');
    background-position: center;
    background-size: cover;
`
