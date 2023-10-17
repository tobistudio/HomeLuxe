import React from 'react'
import * as Styled from './index.style'

export const Subscription = () => {
    return (
        <Styled.SubscriptionWrapper>
            <h2>Soyez le premier informé de nos meilleures offres!</h2>
            <Styled.EmailPart>
                <input placeholder='Adresse E-mail'></input>
                <Styled.Button>
                    Soumettre
                </Styled.Button>
            </Styled.EmailPart>
        </Styled.SubscriptionWrapper>
    )
}