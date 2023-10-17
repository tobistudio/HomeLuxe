import React from 'react'
import * as Styled from './index.style'
import { data } from './data'
import {
    BsArrowRight
} from 'react-icons/bs'

export const Intro: React.FC = () => {
    return (
        <Styled.IntroWrapper>
            <Styled.Container>
                <Styled.Header>
                    <h2>Pourquoi Nous Choissir</h2>
                </Styled.Header>
                {data.map(ele =>
                    <Styled.Item>
                        <Styled.Title>{ele.title}</Styled.Title>
                        <Styled.Content>{ele.content}</Styled.Content>
                        <Styled.Button>Plus Info<BsArrowRight /></Styled.Button>
                    </Styled.Item>
                )}
            </Styled.Container>
        </Styled.IntroWrapper>
    )
}
