import React from 'react'
import * as Styled from './index.style'
import type * as Type from '../../types'
import { BsArrowRight } from "react-icons/bs";

export const BlogCard: React.FC<Type.IBlogCardProps> = ({
    date,
    subtitle,
    title,
    content,
    image
}) => {
    return (
        <Styled.BlogCardWarrper>
            <Styled.Image>
                <img src={image} />
            </Styled.Image>
            <Styled.ContentPart>
                <Styled.Date>
                    {date}
                    <span>{subtitle}</span>
                </Styled.Date>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Content>{content}</Styled.Content>
                <Styled.Button>En savoir plus <BsArrowRight /></Styled.Button>
            </Styled.ContentPart>
        </Styled.BlogCardWarrper>
    )
}