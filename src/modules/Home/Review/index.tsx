import React from 'react'
import * as Styled from './index.style'
import {
    BsArrowRight,
    BsArrowLeft
} from 'react-icons/bs'
import { data } from './data'
import * as Comp from '../../../components'

export const Review: React.FC = () => {
    return (
        <Styled.ReviewWrapper>
            <Styled.Title>
                <p>Témoignages</p>
                <h3>Avis de nos clients</h3>
            </Styled.Title>
            <Styled.Container>
                {
                    data.map(ele => (
                        <Comp.ReviewCard bgImage={ele.bgImage} avatar={ele.avatar} content={ele.content} />
                    ))
                }
                <Styled.SlideButton>
                    <BsArrowLeft />
                    <BsArrowRight />
                </Styled.SlideButton>
            </Styled.Container>
        </Styled.ReviewWrapper>
    )
}
