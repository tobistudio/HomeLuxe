import React from 'react'
import { AppLayout } from '../../layouts'
import * as Section from '../../modules/Product'
import { Subscription } from '../../components/Subscription'

const Product: React.FC = () => {
    return (
        <AppLayout>
            <Section.Slider></Section.Slider>
            <Section.Price></Section.Price>
            <Section.Product></Section.Product>
            <Subscription />
        </AppLayout>
    )
}

export default Product