import React from 'react'
import { Data } from './data'
import * as Styled from './index.style'
import * as Comp from '../../../components'
import { BsArrowRight } from 'react-icons/bs'

export const Product: React.FC = () => {


    return (
        <Styled.ItemWrapper>
            <h2>Les clients ont également consulté</h2>
            <Styled.Items>
                {Data.map((ele, id) =>
                    <Comp.ProductCard
                        type={'sm'}
                        subtitle={ele.subtitle} image={ele.image} content={ele.content} price={ele.price} key={id} />
                )}
            </Styled.Items>
            <Styled.Button>
                Voir tout
                <BsArrowRight />
            </Styled.Button>
        </Styled.ItemWrapper>
    )
}
