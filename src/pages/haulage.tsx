import React from 'react'
import Footer from '../components/Footer'
import type { PageProps, HeadFC } from 'gatsby'
import { Link } from 'gatsby'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'

const Haulage: React.FC<PageProps> = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-stone-100">

          {/*

          // Hero Section

          */}
          <section
            className="text-left px-8 lg:px-32 py-12"
          >
          <h1 className="text-6xl pb-6">
            <span className='font-black-ops text-orange-600'>McCann</span> Haulage
          </h1>
          <p className="pb-6 text-2xl">With over 20 years of experience, McCann haulage provides a fast and high quality haulage service to all of the UK and Ireland from our base in Dungannon.</p>
          <p className="pb-6 text-2xl">
            For queries or a quote contact Mark at <a className='text-sky-600 hover:text-sky-700' href="tel:07866-413-254">07866-413-254.</a>
          </p>
         
          </section>


          <section className="flex flex-col md:flex-row bg-stone-300">
            <div className="flex-1 p-6">
              <h2 className="text-orange-600 text-4xl font-semibold pb-4">Haulage</h2>
              <p className="text-xl mb-6">
                At McCann Haulage we have a wide range of vehicles from 3.5 tonnes to
                44 tonnes, ensuring we have a solution for every job 🚚
              </p>
              <ul className="list-disc space-y-2 pl-5">
                {/* Example list items, replace with your own */}
                <li className="text-xl">Bulk Haulage</li>
                <li className="text-xl">Bulk Tippers</li>
                <li className="text-xl">Waste Carriers (Fully licenced for all of UK and all of Ireland.)</li>
                <li className="text-xl">ADR approved drivers</li>
                <li className="text-xl">Curtain Siders</li>
                <li className="text-xl">Insulated Tar Trailers</li>
                <li className="text-xl">Shovel (Volvo L90) available</li>
              </ul>
            </div>
            <div className="flex-1 flex items-center p-6">
              <div className="w-full">
                <Carousel />
              </div>
            </div>
        </section>
        

        <section
            className="bg-stone-100 text-center px-8 lg:px-24 py-12"
          >
            <h2 className="text-orange-600 text-4xl font-semibold pb-8">Contact Us</h2>
            <p className="pb-6 text-xl">Give us a ring to discuss your requirements or get a quote.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <i className='bx bxs-phone text-7xl pb-6'></i>
              <p className="pb-6 text-xl text-sky-600 hover:text-sky-700"><a href="tel:07866-413-254">07866-413-254</a></p>
            </div>
            <div>
              <i className='bx bxs-id-card text-7xl pb-6'></i>
              <address className="pb-6 text-xl">
                Mc Cann Haulage LTD<br />
                65 Kilnacart Road<br />
                Dunamoney, Dungannon<br />
                BT70 1PD
              </address>
            </div>
            <div>
              <i className='bx bxs-envelope text-7xl pb-6'></i>
              <p className="pb-6 text-xl text-sky-600 hover:text-sky-700">
                <a href="mailto:mccannhaulageltd@gmail.com">mccannhaulageltd@gmail.com</a>
              </p>
            </div>
          </div>

        </section>
        
        <p>carousel</p>
        <Carousel />

          {/*

          // Contact Us Section

          */}
          <section
            className="bg-stone-300 text-center px-8 lg:px-24 py-12"
          >
            <h2 className="text-orange-600 text-4xl font-semibold pb-8">Contact Us</h2>
            <p className="pb-6 text-xl">Give us a ring to discuss your requirements or get a quote.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <i className='bx bxs-phone text-7xl pb-6'></i>
              <p className="pb-6 text-xl text-sky-600 hover:text-sky-700"><a href="tel:07866-413-254">07866-413-254</a></p>
            </div>
            <div>
              <i className='bx bxs-id-card text-7xl pb-6'></i>
              <address className="pb-6 text-xl">
                Mc Cann Haulage LTD<br />
                65 Kilnacart Road<br />
                Dunamoney, Dungannon<br />
                BT70 1PD
              </address>
            </div>
            <div>
              <i className='bx bxs-envelope text-7xl pb-6'></i>
              <p className="pb-6 text-xl text-sky-600 hover:text-sky-700">
                <a href="mailto:mccannhaulageltd@gmail.com">mccannhaulageltd@gmail.com</a>
              </p>
            </div>
          </div>

          </section>
      </main>
      <Footer />
    </div>

  )
}


export default Haulage

export const Head: HeadFC = () => <title>Haulage</title>
