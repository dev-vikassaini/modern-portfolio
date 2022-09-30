import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from '../BackgroundCircle/BackgroundCircle';
type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hy, The Name's Vikas Kumar",
            "Guy-who-loves-coffee",
            "<ButLovesToCodeMore"
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
                    src="https://scontent.fdel42-1.fna.fbcdn.net/v/t1.6435-9/46863329_2546120972095413_8616986254535294976_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=84a396&_nc_ohc=fa-gS-xbZwAAX-TlPyT&_nc_ht=scontent.fdel42-1.fna&oh=00_AT9u5yTQjCZpQ8xKE3zPr-Vp5ssns-Kq2R-2x74AWH4eKA&oe=6358C671"
                    alt="avatar" />
                <div className='z-20'>
                    <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                    <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                        <span className='mr-3'>{text}</span>
                        <Cursor cursorColor='#F7AB0A' />
                    </h1>
                    <div className='pt-5'>
                        <Link href="#about">
                            <button className="heroButton">About</button>
                        </Link>
                        <Link href="#experience">
                            <button className="heroButton">Experience</button>
                        </Link>
                        <Link href="#skills">
                            <button className="heroButton">Skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className="heroButton">Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

