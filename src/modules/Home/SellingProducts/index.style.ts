import styled from "styled-components"

export const CategoryWrapper = styled.div`
    padding: 81px 0;
    max-width: 1280px;
    margin: auto;
`

export const Container = styled.div`
    position: relative;
    & h2 {
        color: #000;
        font-family: SF Pro Text;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
        margin-bottom: 47px;
    }
`

export const List = styled.div`
    display: flex;
    justify-content: space-between;
    
`

export const SlideButton = styled.div`
    position: absolute;
    top: calc(40% - 20px);
    right: -20px;
    cursor: pointer;
    display: flex;
    padding: 13px;
    align-items: flex-start;
    gap: 10.87px;
    border-radius: 26.087px;
    background: #FFF;
    box-shadow: 0px 7.03125px 19.53125px 0px rgba(0, 0, 0, 0.06);
`

export const MoreButton = styled.div`
    margin-top: 56px;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    & h2 {
        margin: 0;
        color: #000;
        font-family: "SF Pro Text";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: flex;
        align-items: center;
        gap: 6px;
    }
`