import Image from 'next/image'
import { roboto_mono } from './ui/font';

export default function Home()
{
	return(
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center  justify-between  text-sm lg:flex">
				<p className={'font-sans fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'}>OPENHOUSE INVITATION</p>

				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-teal-950 dark:via-teal-950 lg:static lg:h-auto lg:w-auto lg:bg-none">

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
              height={24}
              priority
            />
          </a>
				</div>
				
			</div>
	
	{/* Image Family */}
			 <div className="relative m-4 flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-teal-200 after:via-teal-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-teal-100 before:dark:opacity-10 after:dark:from-teal-950 after:dark:via-[#1e331f] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/digital_rsvp_img.png"
          alt="Next.js Logo"
          width={500}
          height={400}
          priority
        />

			<h2 className="font-sans mt-10 text-sm text-center font-semibold">We invite you to our open house in occasion in celebrating raya</h2>
			<br/>
      </div>

		
		
		<div className='mt-2 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center'>


			<h2 className="font-sans mb-3 text-xl text-center font-bold">SUNDAY, 28 APRIL 2024</h2>
			<p className='font-sans mb-3 text-md text-center font-bold'>12-5PM</p>
			<p className="font-sans mb-3 text-md text-center font-bold">No.8, Lorong Berlian 5, Taman Batu Tiga, 40150 Shah Alam, Selangor</p>
			<br/>

			<a href='#' className='group font-sans border-neutral-700 bg-yellow-600 rounded-lg border px-5 py-4 transition-colors
			hover:border-gray-300
			hover:bg-yellow-100 hover:dark:border-neutral-100 hover:dark:bg-yellow-600 hover:dark:bg-opacity-30'
			target='_blank'
			rel='noopener noreferer'>RSVP NOW</a>
		</div>

		</main>
	);
}