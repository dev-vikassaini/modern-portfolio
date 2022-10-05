import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {
}

export default function ContactMe({ }: Props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:dev.vikassaini@gmail.com?subject=${formData.subject}&body=Hey my name ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>

        Contact Me
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.
          <span className='decoration-[#F7AB0A]/50 underline'> Let Talk.</span>
        </h4>

        <div className='space-y-8'>
          <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+1234567890</p>
          </div>

          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>dev.vikassaini@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>123 India</p>
          </div>

        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex space-x-2'>
            <input placeholder='Name' className='contactInput' type="text" {...register("name")} />
            <input placeholder='Email' className='contactInput' type="email" {...register("email")} />
          </div>
          <input placeholder='Subject' className='contactInput' type="text" {...register("subject")} />
          <textarea placeholder='Message' className='contactInput' {...register("message")} />
          <button className='bg-[#F7AB0A] py-5 px-10 rounded-md 
          text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}