import styled from "styled-components"

export const BlogWarrpper = styled.div`
    padding-top: 130px;
    max-width: 1280px;
    margin: auto;
    & p {
        color: rgba(0, 0, 0, 0.75);
        font-family: Khula;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        max-width: 954px;
        margin: 0;
        margin-bottom: 95px;
    }

    &  h1 {
        color: #000;
        font-family: Khula;
        font-size: 55px;
        font-style: normal;
        font-weight: 600;
        margin: 0;
    }
`

export const BlogItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 50px;
`

export const page = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`