/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import ContactMe from '../components/ContactMe/ContactMe'
import Experience from '../components/Experience/Experience'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'

const Home: NextPage = () => {
  const avatarImg = 'https://avatars.githubusercontent.com/u/35251388?s=400&u=33619f9daabb7ab80de755ee76189d2d28618fe7&v=4'
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/2 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Vikas Kumar's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <AboutUs />
      </section>

      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />
      </section>


      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      <section id="contactMe" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-end justify-end mr-5'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              alt="test"
              src={avatarImg} />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
