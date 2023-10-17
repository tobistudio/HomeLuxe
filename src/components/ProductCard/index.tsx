import React from 'react'
import * as Styled from './index.style'
import type * as Type from '../../types'

export const ProductCard: React.FC<Type.IProductProps> = ({
    image,
    content,
    subtitle,
    price,
    type
}) => {
    return (
        <Styled.ProductWrapper>
            <Styled.Image type={type}>
                <img src={image} />
            </Styled.Image>
            <Styled.Setting type={type}>
                <div>
                    <img src={type === 'lm' ? 'assets/img/Ellipse 1143.svg' : 'assets/img/Ellipse 11431.svg'} />
                </div>
                <div style={{ backgroundColor: '#000' }}></div>
                <div style={{ backgroundColor: '#fff', border: '1px solid #000' }}></div>
            </Styled.Setting>
            <Styled.Price>
                <Styled.Left type={type}>
                    <p>{content}</p>
                    <h6>{subtitle}</h6>
                </Styled.Left>
                <Styled.Right>
                    {price}€
                </Styled.Right>
            </Styled.Price>
        </Styled.ProductWrapper>
    )
}
