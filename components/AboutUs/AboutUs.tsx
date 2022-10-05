import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function AboutUs({ }: Props) {
    const avatar = "https://scontent.fdel3-4.fna.fbcdn.net/v/t1.6435-9/103811157_4171172849590209_4367536376952106537_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B7pDmUyegkcAX8pgRpT&_nc_ht=scontent.fdel3-4.fna&oh=00_AT8vNPWNwhUlqisqz2NAQw7xUNnOv71KxYSPTKPBdGvHHg&oe=635C7853"


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                TEST
            </h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={avatar}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px]
                xl:h-[600px]"
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptates. Repellendus rerum nihil accusamus, alias assumenda facilis asperiores labore officia tempora eveniet id neque explicabo accusantium eaque ullam voluptatibus fugit quas vero eligendi voluptas? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus pariatur vero veniam a ea suscipit consectetur, obcaecati necessitatibus eos ullam perspiciatis cupiditate, provident inventore omnis beatae blanditiis, voluptate animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis soluta dolorum numquam asperiores? Dolorum impedit blanditiis quos a error accusantium natus odit, quas illo animi eaque deserunt maxime eius. Et omnis soluta dolorum numquam asperiores? Dolorum impedit blanditiis quos a error accusantium natus odit, quas illo animi eaque deserunt maxime eius. Et omnis soluta dolorum numquam asperiores? Dolorum impedit blanditiis quos a error accusantium natus odit, quas illo animi eaque deserunt maxime eius.</p>
            </div>
        </motion.div>
    )
}