'use client';

import Image from 'next/image'
import { useState } from 'react';
import { useFormState } from "react-dom";

export default function Submit_rsvp()
{
	const [willAttend, setWillAttend] = useState(false);
	const [guestCount, setGuestCount] = useState(1);

	const handleAttendanceChange = (event) =>{
		setWillAttend(event.target.checked);
		//if user uncheck 'will attend' reset guest count and hide 
		if(!event.target.checked){
			setGuestCount(1);
		}
	};

	const handGuestCountChange = (event) =>{
		setGuestCount(event.target.value);
	}

	const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data
  };
	return(
		<main className="relative flex flex-col bg-[url(/grid.svg)] p-10 [mask-image:linear-gradient(180deg, white,rgba(255,255,255,0))] items-center">
			<div className='relative flex min-h-screen flex-col border border-yellow-400 overflow-hidden bg-teal-950 py-6 sm:py-12 p-10'>
			{/* <div className='absolute inset-0  bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg, white,rgba(255,255,255,0))]'></div> */}
			<div className="relative z-10 max-w-5xl w-full text-sm lg:flex">

				<p className={'font-mono text-2xl fixed left-0 top-0 flex w-full font-italic justify-center bg-gradient-to-b from-teal-800 pb-6 pt-8 backdrop-blur-xl dark:border-teal-800 dark:bg-teal-950/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-teal-950 lg:p-4 lg:dark:bg-teal-950/30'}> Please RSVP Below</p>

				<div className="mt-10 fixed bottom-0 left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-teal-800 via-teal-950 dark:from-teal-950 dark:via-teal-950 lg:static lg:h-auto lg:w-auto lg:bg-none">

				 <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
			{/* <a href="https://www.flaticon.com/free-icons/raya" title="raya icons">Raya icons created by LAB Design Studio - Flaticon</a> */}
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={20}
              priority
            />
          </a>
				</div>
				
			</div>
	
		<div className='w-full flex flex-col text-center lg:max-w-lg lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center align-top justify-start'>
			{/* RSVP Form */}

          <form className="mt-10 w-full flex flex-col gap-6" >
            {/* Name Input */}
			<div className='mt-2 flex flex-col left-0 align-baseline'>
			<label className='text-sm font-medium text-gray-900 dark:text-gray-300  font-sans text-left mb-4'>Name</label>
            <input className="w-full max-w-md rounded-lg border px-5 py-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Name" required />
			</div>

			
           {/* Tick Attendance Input */}
		 		<label className='mt-4 text-sm font-medium text-gray-900 dark:text-gray-300  font-sans text-left'>Will you attend?</label>
			<div className='flex'>
			
				<div className="flex items-center me-4">
					
					<input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={willAttend} onChange={handleAttendanceChange}/>
					<label for="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-sans">Yes, I will attend</label>
				</div>
				<div className="flex items-center me-4">
					<input id="inline-2-checkbox" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
					<label for="inline-2-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-sans">Sorry, unable to attend</label>
				</div>
				
</div>
            {/* Number of Guests Input */}
            
	<div className='mt-4 flex flex-col left-0 align-baseline'>
			<label className='text-sm text-gray-900 dark:text-gray-300  font-sans text-left mb-4'>Number Of Guests </label>
             
    <div className="relative flex items-center max-w-[11rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" className="bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
			
            <svg className="w-3 h-3 text-gray-900 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-100 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-teal-800 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value="3" required />
        <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
            <svg className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
            </svg>
            <span>People</span>
        </div>
        <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" className="bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-500 font-sans text-left">Please select the number of guest.</p>
			</div>
          
            
			{/* Submit Button */}     
				<a href='/Submit' type='submit' className='w-full max-w-md group font-sans border-neutral-700 bg-yellow-600 rounded-lg border px-5 py-4 transition-colors
			hover:border-gray-300
			hover:bg-yellow-100 hover:dark:border-neutral-100 hover:dark:bg-yellow-600 hover:dark:bg-opacity-30'>Submit</a>
			</form>
		</div>
		</div>
		</main>
	);
}