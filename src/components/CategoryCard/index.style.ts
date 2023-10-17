import styled from "styled-components"

export const CategoryWrapper = styled.div<{ bg: string }>`
    background-image: ${props => `url(${props.bg})`};
    position: relative;
    width: 413.647px;
    height: 363px;
`

export const TipBar = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 56px;
    background: rgba(0, 0, 0, 0.80);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    & h4 {
        margin: 0;
        color: #FFF;
        font-family: SF Pro Text;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
    }
`