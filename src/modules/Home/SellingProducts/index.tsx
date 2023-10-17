import React from 'react'
import * as Styled from './index.style'
import * as Comp from '../../../components'
import { Data } from './data'
import { BsArrowRight } from 'react-icons/bs'

export const SellingProducts: React.FC = () => {

    return (
        <Styled.CategoryWrapper>
            <Styled.Container>
                <h2>Our Best Selling Products</h2>
                <Styled.List>
                    {Data.map((ele, id) => <Comp.ProductCard
                        type='lm'
                        subtitle={ele.subtitle} image={ele.image} content={ele.content} price={ele.price} key={id} />)}
                </Styled.List>
                <Styled.SlideButton>
                    <BsArrowRight />
                </Styled.SlideButton>
                <Styled.MoreButton>
                    <h2>Catalogue complet<BsArrowRight /></h2>
                </Styled.MoreButton>
            </Styled.Container>
        </Styled.CategoryWrapper>
    )
}
