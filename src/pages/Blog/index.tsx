import React from 'react'
import { AppLayout } from '../../layouts'
import * as Section from '../../modules/Blog'
import { Subscription } from '../../components/Subscription'

const Product: React.FC = () => {
    return (
        <AppLayout>
            <Section.Blog />
            <Subscription />
        </AppLayout>
    )
}

export default Product