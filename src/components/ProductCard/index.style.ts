import styled from "styled-components"

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
`

export const Image = styled.div<{ type: string }>`
    background: ${props => props.type === 'lm' ? '#F9F9F9' : '#fff'};
    padding: ${props => props.type === 'lm' ? `50px 30px` : `0px`};
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 413px;
    width: 100%;
    & img {
        height: 200px;
    }
`

export const Setting = styled.div<{ type: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 20px;
    & > div {
        width: ${props => props.type === 'lm' ? '38.935px' : '23px'};
        height: ${props => props.type === 'lm' ? '38.935px' : '23px'};
        border-radius: 40.86px;
    }
`

export const Price = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Left = styled.div<{ type: string }>`
    & p {
        color: #8D8D8D;
        font-family: Inter;
        font-size: ${props => props.type === 'lm' ? '16px' : '10px'};
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }
    & h6 {
        color: #000;
        font-family: Khula;
        font-size: ${props => props.type === 'lm' ? '20px' : '11px'};
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin: 0;
    }
`

export const Right = styled.div`
    color: #292929;
    font-family: Khula;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`