import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col bg-[url(/grid.svg)] p-10 mask-image-[linear-gradient(180deg,_white,_rgba(255,255,255,0))] items-center">
      <div className='mt-0 flex min-h-screen flex-col border border-yellow-400 overflow-hidden bg-teal-950 py-12 px-10'>
        
        <div className="z-10 w-full text-center">

          <h1 className='text-2xl font-mono font-italic bg-gradient-to-b from-teal-950 to-transparent pb-6 pt-8 backdrop-blur-xl border-b border-yellow-400 dark:bg-teal-950/30 lg:rounded-xl lg:p-4'>
            YOU'RE INVITED
          </h1>

          <div className="mt-10 mb-10 flex flex-col items-center justify-center lg:flex-row lg:justify-between">

            <div className="mb-6 lg:mb-0 lg:flex lg:items-center">
              <Image
                src="/digital_rsvp_img.png"
                alt="RSVP Invitation"
                width={500}
                height={400}
                priority
                className="rounded border dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              />
            </div>
            
            <div>
              <h2 className="mt-2 mb-10 text-sm">We invite you to our open house in occasion of celebrating Raya</h2>
              <h2 className="font-sans mt-6 text-xl font-bold">SUNDAY, 28 APRIL 2024</h2>
              <p className='font-sans mt-3 text-md font-bold'>12-5PM</p>
              <p className="font-sans mt-3 text-md font-bold">No.8, Lorong Berlian 5, Taman Batu Tiga, 40150 Shah Alam, Selangor</p>
              <a href='/Submit' className='w-full max-w-md mt-6 inline-block rounded-lg border border-neutral-700 bg-yellow-600 px-5 py-4 font-sans transition-colors hover:border-gray-300 hover:bg-yellow-100 dark:hover:border-neutral-100 dark:hover:bg-yellow-600 dark:hover:bg-opacity-30'>
                RSVP NOW
              </a>
            </div>

          </div>

          <div className="fixed bottom-0 left-0 right-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-teal-800 via-teal-950 to-transparent dark:from-teal-950 dark:via-teal-950 lg:relative lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="flex items-center gap-2 p-8 lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={20}
                priority
                className="dark:invert"
              />
            </a>
          </div>
        
        </div>
      </div>
    </main>
  );
}
