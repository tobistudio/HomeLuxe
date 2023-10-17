import React from 'react'
import * as Styled from './index.style'
import {
    AiFillStar
} from 'react-icons/ai'
import type * as Type from '../../types'

export const ReviewCard: React.FC<Type.IReviewCardProps> = ({
    bgImage,
    avatar,
    content
}) => {
    return (
        <Styled.ReviewCard bg={bgImage}>
            <Styled.Content>
                <Styled.Avatar>
                    <img src={avatar} />
                </Styled.Avatar>
                <Styled.TextArea>
                    <Styled.HeaderArea>
                        <h3>{content.name}</h3>
                        <h4>{content.location}</h4>
                    </Styled.HeaderArea>
                    <Styled.Text>{content.content}</Styled.Text>
                    <Styled.StarItem>
                        {[...new Array(5)].map((ele, id) => (
                            id < content.star ? <Styled.Star>
                                <AiFillStar />
                            </Styled.Star> : <Styled.NoStar>
                                <AiFillStar />
                            </Styled.NoStar>
                        ))}
                    </Styled.StarItem>
                </Styled.TextArea>
            </Styled.Content>
        </Styled.ReviewCard>
    )
}
