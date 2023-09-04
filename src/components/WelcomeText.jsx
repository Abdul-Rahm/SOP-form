import React from 'react';
import {NavLink} from "react-router-dom";
import { FormFill } from '../assets';

const WelcomeText = () => {
  return (
    <section className='my-0 mx-auto overflow-x-hidden'>
        <div className='mt-48 p-12 -mx-7 grid grid-cols-[65%_35%] w-full'>
            <span className='text-4xl font-bold'>Welcome to the world of aspirations.</span><br/>
            <span className='text-3xl font-semibold text-slate-800'>Where dreams take flight...</span><br/>
            <div>
              <NavLink to={"/form"}>
                <button className='my-4 mt-10 mx-0 bg-slate-900 text-zinc-100 py-3 px-6 border-none rounded-3xl'>
                    Initiate Form.📄
                </button>
               </NavLink>
            </div>

            <img 
              src={FormFill} 
              alt='' 
              className='-mt-32'
            />
        </div>

    </section>
  )
}

export default WelcomeText;
