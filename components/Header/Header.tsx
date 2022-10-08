import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500, opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center'>
                <Link href="#hero"><button className="heroButton text-xs text-gray-400">Home</button></Link>
                <Link href="#about"><button className="heroButton text-xs text-gray-400">About</button></Link>
                <Link href="#experience"><button className="heroButton text-xs text-gray-400">Experience</button></Link>
                <Link href="#skills"><button className="heroButton text-xs text-gray-400">Skills</button></Link>
                <Link href="#projects"><button className="heroButton text-xs text-gray-400">Projects</button></Link>
            </motion.div>

            <motion.div
                initial={{
                    x: 500, opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon className='cursor-pointer' url="https://twitter.com/Dev_VikasKumar"
                    network='email'
                    fgColor='gray'
                    bgColor='transparent' />
            </motion.div>

        </header>
    )
}