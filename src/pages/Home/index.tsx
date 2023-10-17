import React from 'react'
import { AppLayout } from '../../layouts'
import * as Section from '../../modules/Home'

const Home: React.FC = () => {
    return (
        <AppLayout>
            <Section.Landing></Section.Landing>
            <Section.Categories></Section.Categories>
            <Section.LandScape></Section.LandScape>
            <Section.SellingProducts></Section.SellingProducts>
            <Section.Between></Section.Between>
            <Section.Intro></Section.Intro>
            <Section.Review></Section.Review>
            <Section.ContactUs></Section.ContactUs>
        </AppLayout>
    )
}

export default Home