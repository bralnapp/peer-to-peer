import React from 'react'
import Button from '../common/components/Button'
import HowItWorks from './components/HowItWorks'
import Layout from './components/layout'
import WhyChooseUs from './components/WhyChooseUs'

const LandingPage = () => {
    return (
        <Layout>
            <section className="layout-container md:mb-20 lg:grid lg:grid-cols-2 lg:gap-x-[88px] lg:items-center lg:mb-[84px]">
                <div className='text-center lg:text-left'>
                    <h1 className='text-primary-2 font-medium text-2xl mb-2 md:text-[52px] md:leading-[72px] lg:mb-4 lg:text-4xl xl:text-5xl lg:w-11/12'>The cheap and speedy way to send money across borders</h1>
                    <p className='text-[#4B4B4B] text-sm md:text-2xl lg:text-xl'>Fund your Klasha Wallet using your local African payment methods and currencies, get access to virtual dollar cards, shop for your favourite goods globally and get them delivered to your doorstep.</p>
                    <Button href="/exchange" title="get started" primary className="mx-auto w-32 h-10 mt-[18px] md:w-[192px] md:h-12 lg:mx-0" />
                </div>
                <div className='bg-[#D9D9D9] w-full h-[200px] my-10 md:h-[280px] md:my-12 lg:h-[405px] lg:my-0' />
            </section>

            <section className='layout-container flex flex-col lg:flex-none lg:grid lg:grid-cols-2 lg:gap-x-[88px]  lg:items-center md:mb-20 lg:mb-[92px]'>
                <div className='bg-[#D9D9D9] order-2  w-full h-[200px] my-10 md:h-[280px] md:my-12 lg:h-[405px] lg:my-0 lg:-order-1'/>
                <div className='text-center lg:text-left'>
                    <h2 className='text-primary-2 font-medium text-2xl mb-2 md:text-[52px] md:leading-[72px] lg:mb-4 lg:text-4xl xl:text-5xl lg:w-11/12'>The cheap and speedy way to send money across borders</h2>
                    <p className='text-[#4B4B4B] text-sm md:text-2xl lg:text-xl'>Fund your Klasha Wallet using your local African payment methods and currencies, get access to virtual dollar cards, shop for your favourite goods globally and get them delivered to your doorstep.</p>
                </div>
            </section>

            <HowItWorks />

            <WhyChooseUs />

            {/* Become an Exchanger section */}
            <section className='mb-20 md:layout-container lg:mb-[112px]'>
                <div className="bg-black text-white text-center py-10 md:rounded-3xl md:py-12">
                    <h3 className='font-medium capitalize text-xl mb-2 md:text-4xl md:mb-4 lg:text-5xl lg:leading-[66px]'>become an exchanger</h3>
                    <p className='text-[#DDDDDD] text-sm max-w-xs mx-auto md:text-xl md:max-w-lg lg:max-w-2xl'>Fund your Klasha Wallet using your local African payment methods and currencies, get access to virtual dollar cards, shop for your favourite.</p>
                    <Button href="/exchange" title="get started" className="w-32 h-10 mx-auto mt-5 md:mt-8 md:w-40 md:h-12" />
                </div>
            </section>
        </Layout>
    )
}

export default LandingPage