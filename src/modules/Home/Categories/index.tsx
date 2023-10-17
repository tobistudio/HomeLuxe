import React from 'react'
import * as Styled from './categories.style'
import * as Comp from '../../../components'
import { Data } from './data'
import { BsArrowRight } from 'react-icons/bs'

export const Categories: React.FC = () => {

    return (
        <Styled.CategoryWrapper>
            <Styled.Container>
                <h2>Catégories</h2>
                <Styled.List>
                    {Data.map((ele, id) => <Comp.CategoryCard subtitle={ele.subtitle} background={ele.background} key={id} />)}
                </Styled.List>
                <Styled.SlideButton>
                    <BsArrowRight />
                </Styled.SlideButton>
                <Styled.MoreButton>
                    <h2>Découvrir<BsArrowRight /></h2>
                </Styled.MoreButton>
            </Styled.Container>
        </Styled.CategoryWrapper>
    )
}
