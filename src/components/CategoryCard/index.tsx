import React from 'react'
import * as Styled from './index.style'
import type * as Type from '../../types'

export const CategoryCard: React.FC<Type.ICategoryCardProps> = ({
    subtitle,
    background
}) => {
    return (
        <Styled.CategoryWrapper bg={background}>
            <Styled.TipBar>
                <h4>{subtitle}</h4>
            </Styled.TipBar>
        </Styled.CategoryWrapper>
    )
}
