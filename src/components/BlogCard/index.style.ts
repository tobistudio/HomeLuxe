import styled from 'styled-components'

export const BlogCardWarrper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    border-radius: 10px;
    background-color: #fff;
`

export const Image = styled.div`
    flex: 1 1 0;
    & img {
        width: 100%;
    }
`

export const ContentPart = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 20px;
`

export const Date = styled.div`
    color: rgba(0, 0, 0, 0.75);
    font-family: Khula;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 22.4px */
    letter-spacing: -0.28px;
    & span {
        margin: 40px;
    }
`

export const Title = styled.div`
    color: #000;
    font-family: Khula;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 135%; /* 25.65px */
    letter-spacing: -0.38px;
    max-width: 230px;
`

export const Content = styled.div`
    color: rgba(0, 0, 0, 0.75);
    font-family: Khula;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 19.2px */
    letter-spacing: -0.24px;
`

export const Button = styled.div`
    color: #000;
    font-family: Khula;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 20px;
`