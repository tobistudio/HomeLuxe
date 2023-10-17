import styled from 'styled-components'

export const ItemWrapper = styled.div`
    max-width: 1280px;
    margin: auto;
    margin-top: 100px;
    & h2 {
        color: #000;
        font-family: Khula;
        font-size: 45px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`

export const Items = styled.div`
    display: grid;
    margin-top: 30px;
    margin-bottom: 65px;
    grid-template-columns: repeat(4, 1fr);
`

export const Button = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    margin: auto;
    width: 133px;
    cursor: pointer;
    font-weight: 600;
    gap: 10px;
`