import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full lg:w-[200px] lg:h-[200px] md:w-[200px] md:h-[200px] xl:h-[200px] object-cover'
                src='https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg'
                alt='image' />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>COE OF TEST</h4>
                <p className='font-bold text-2xl mt-1'>TEST TEST</p>
                <div className='flex space-x-2 my-2'>
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="test" />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6V16aAO8XRNDXr1sDnI-AyTkCgx1KoPrkvACzv-3MQ&s" alt="test" />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8-320-80.jpg" alt="test" />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://yt3.ggpht.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj" alt="test" />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... Ended...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary PointsSummary PointsSummary PointsSummary PointsSummary</li>
                    <li>Summary PointsSummary PointsSummary PointsSummary PointsSummary</li>
                    <li>Summary PointsSummary PointsSummary PointsSummary PointsSummary</li>
                    <li>Summary PointsSummary PointsSummary PointsSummary PointsSummary</li>
                    <li>Summary PointsSummary PointsSummary PointsSummary PointsSummary</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard;