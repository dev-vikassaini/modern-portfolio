/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from '../BackgroundCircle/BackgroundCircle';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Hero({ }: Props) {
    const avatarImg = 'https://avatars.githubusercontent.com/u/35251388?s=400&u=33619f9daabb7ab80de755ee76189d2d28618fe7&v=4'
    const [text, count] = useTypewriter({
        words: [
            "Vikas Kumar",
            "Let's build something great",
            "<EatSleepCodeRepeat>"
        ],
        loop: true,
        delaySpeed: 2000
    });
    return (
        <React.Fragment>
            <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
                <BackgroundCircle />
                <img
                    className='relative rounded-full h-32 w-32 mx-auto object-cover'
                    src={avatarImg}
                    alt="avatar" />
                <div className='z-20'>
                    <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                    <h1 className='text-3xl lg:text-5xl font-semibold px-10'>
                        <span className='mr-3'>{text}</span>
                        <Cursor cursorColor='#F7AB0A' />
                    </h1>
                    <div className='pt-5 space-x-2'>
                        <SocialIcon fgColor='white'
                            bgColor='#007bb6' className='cursor-pointer' style={{ width: '42px', height: '42px' }} url="https://www.linkedin.com/in/vikas-kumar-b242ab42/" />
                        <SocialIcon fgColor='gray'
                            bgColor=' #000000' className='cursor-pointer' style={{ width: '42px', height: '42px' }} url="https://github.com/dev-vikassaini" />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

