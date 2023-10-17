import styled from "styled-components"

export const BetweenWrapper = styled.div`
    background-image: url('assets/img/second-bg.png');
    height: 579px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Content = styled.div`
    color: #FFF;
    padding-top: 380px;
    padding-left: 124px;
    & p {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        max-width: 447.133px;
        font-weight: 300;
        line-height: normal;
        margin-bottom: 30px;
    }
`

export const MoreButton = styled.div`
    & h2 {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`