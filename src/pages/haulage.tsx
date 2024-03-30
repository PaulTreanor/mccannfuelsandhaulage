import React from 'react'
import Footer from '../components/Footer'
import type { PageProps, HeadFC } from 'gatsby'
import { Link } from 'gatsby'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import storage from '../images/storage.jpg'

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
            <div className="flex-1 p-6 lg:pl-12">
              <h2 className="text-orange-600 text-4xl font-semibold pb-4 text-center">Haulage</h2>
              <p className="text-xl mb-6">
                At McCann Haulage we have a wide range of vehicles from 3.5 tonnes to
                44 tonnes, ensuring we have a solution for every job 🚚
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li className="text-xl">Bulk Haulage</li>
                <li className="text-xl">Bulk Tippers</li>
                <li className="text-xl">Waste Carriers (Fully licenced for all of UK and all of Ireland.)</li>
                <li className="text-xl">ADR approved drivers</li>
                <li className="text-xl">Curtain Siders</li>
                <li className="text-xl">Insulated Tar Trailers</li>
                <li className="text-xl">Shovel (Volvo L90) available</li>
              </ul>
            </div>
            <div className="flex-1 flex items-center md:p-6">
              <div className="w-full">
                <Carousel />
              </div>
            </div>
        </section>

        {/* 

        Storage Section
        
        */}

        <section className="flex flex-col md:flex-row bg-stone-100">
            <div className="flex-1 flex items-center p-6 order-2 md:order-1">
              <div className="w-full">
                <img src={storage} alt="Description" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center p-6 order-1 md:order-2">
              <h2 className="text-orange-600 text-4xl font-semibold pb-4 text-center">Storage</h2>
              <p className="text-xl mb-6">
                We have large and secure storage sheds at our yard in Dungannon conveniently located 2 miles from the M1, 40 minutes from Belfast, and only 1 hour from Derry and Enniskellin.
              </p>
              <p className="text-xl mb-6">1,000m2 of storage sheds available</p>
              <p className="text-xl mb-6">Forklift available if needed.</p>
              <p className="text-xl mb-6">Please contact us at <a className='text-sky-600 hover:text-sky-700' href="tel:07866-413-254">07866-413-254</a> to discuss your requirements or get a quote.</p>

            </div>
            
        </section>
        


        


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
