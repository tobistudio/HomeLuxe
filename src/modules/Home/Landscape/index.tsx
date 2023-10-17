import React from 'react'
import * as Styled from './index.style'
import {
    BsArrowRight,
    BsArrowLeft
} from 'react-icons/bs'

export const LandScape: React.FC = () => {
    return (
        <Styled.LandingWrapper>
            <Styled.Container>
                <Styled.Content>
                    <h2>Découvrez Nos Nouveautés</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna tempor aliqua. </p>
                </Styled.Content>
                <Styled.Slide>
                    <Styled.Left>
                        <BsArrowLeft />
                    </Styled.Left>
                    <Styled.Right>
                        <BsArrowRight />
                    </Styled.Right>
                </Styled.Slide>
            </Styled.Container>
        </Styled.LandingWrapper>
    )
}
