import Image from 'next/image'

export default function Submit_rsvp()
{
	return(
		<main className="relative flex flex-col bg-[url(/grid.svg)] p-10 [mask-image:linear-gradient(180deg, white,rgba(255,255,255,0))] items-center">
			<div className='relative flex min-h-screen flex-col justify-evenly border border-yellow-400 overflow-hidden bg-teal-950 py-6 sm:py-12 p-10'>
			{/* <div className='absolute inset-0  bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg, white,rgba(255,255,255,0))]'></div> */}
			<div className="relative z-10 max-w-5xl w-full items-center justify-center  text-sm lg:flex">

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
	
	{/* Image Family */}
			 <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-teal-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-teal-200 after:via-teal-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-100 before:dark:opacity-10 after:dark:from-teal-950 after:dark:via-[#1e331f] after:dark:opacity-40 before:lg:h-[360px]">
       
	
		
      </div>

		

		<div className='relative flex flex-col text-center lg:max-w-lg lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center'>
			{/* RSVP Form */}
          <form className="mt-10 w-full flex flex-col items-center justify-center gap-6">
            {/* Name Input */}
            <input className="w-full max-w-md rounded-lg border px-5 py-3" type="text" placeholder="Your Name" required />
            {/* Email Input */}
            <input className="w-full max-w-md rounded-lg border px-5 py-3" type="email" placeholder="Email Address" required />
			{/* Phone Number */}
            <input className="w-full max-w-md rounded-lg border px-5 py-3" type="phone" placeholder="Phone Number" required />
            {/* Number of Guests Input */}
            <input className="w-full max-w-md rounded-lg border px-5 py-3" type="number" placeholder="Number of Guests (including you)" min="1" required />
          
            
			{/* Submit Button */}     
				<a href='/Submit' className='w-full max-w-md group font-sans border-neutral-700 bg-yellow-600 rounded-lg border px-5 py-4 transition-colors
			hover:border-gray-300
			hover:bg-yellow-100 hover:dark:border-neutral-100 hover:dark:bg-yellow-600 hover:dark:bg-opacity-30'>Submit</a>
			</form>
		</div>
		</div>
		</main>
	);
}