import styled from 'styled-components'

export const PriceWrapper = styled.div`
    padding-top: 130px;
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    margin: auto ;
    margin-top: 20px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 31px;
    & h2 {
        color: #000;
        font-family: Khula;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 0;
    }
    & p {
        color: rgba(37, 49, 60, 0.80);
        font-family: Khula;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
    }
    & > div {
        display: flex;
        align-items: center;
        gap: 34px;
    }
`

export const Price = styled.div`
    & h3 {
        color: #000;
        font-family: Khula;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }
`

export const Item = styled.div`
    background: #000;
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    font-family: Khula;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`