import React from 'react'
import * as Styled from './index.style'

export const Price: React.FC = () => {
    const [price, setPrice] = React.useState(210)

    return (
        <Styled.PriceWrapper>
            <Styled.Content>
                <h2>Présentation du produit</h2>
                <div>
                    <img src='assets/img/Group 48095459.svg' />
                    <p>Confort luxueux</p>
                </div>
                <div>
                    <img src='assets/img/Group 48095459.svg' />
                    <p>Confort luxueux</p>
                </div>
                <div>
                    <img src='assets/img/Group 48095459.svg' />
                    <p>Confort luxueux</p>
                </div>
                <div>
                    <img src='assets/img/Group 48095459.svg' />
                    <p>Construction durable</p>
                </div>
            </Styled.Content>
            <Styled.Price>
                <Styled.Item>{price}€</Styled.Item>
                <h3>En soldes</h3>
            </Styled.Price>
        </Styled.PriceWrapper>
    )
}
