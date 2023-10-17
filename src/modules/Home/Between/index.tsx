import React from 'react'
import * as Styled from './index.style'
import {
    BsArrowRight,
    BsArrowLeft
} from 'react-icons/bs'

export const Between: React.FC = () => {
    return (
        <Styled.BetweenWrapper>
            <Styled.Content>
                <p>L’avantage d’acheter un espace de travail chez nous est qu’il vous offre un service confortable et des installations complètes.</p>
                <Styled.MoreButton>
                    <h2>Découvrir<BsArrowRight /></h2>
                </Styled.MoreButton>
            </Styled.Content>
        </Styled.BetweenWrapper>
    )
}
