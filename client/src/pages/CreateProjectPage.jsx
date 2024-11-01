import React from 'react'
import { Navbar ,CreateProject} from '../components'
import Footer from '../components/Footer'
import { logo } from '../assets'
import vrPerson from '../assets/vr.png'
const CreateProjectPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex w-full'>
        <div className='w-1/2 p-20'>
            <CreateProject/>
        </div>
        <div className='w-1/2 bg-red-700 flex flex-col  items-center justify-center '>
          <img src={logo} alt='leep' className=''/>
          <img src= {vrPerson} alt = 'jeje' />
          <h1 className='text-4xl font-bold uppercase -translate-y-6 text-white'>Take a LEEP, Build your dreams</h1>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default CreateProjectPage