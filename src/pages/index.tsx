import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import lorry from "../images/lorry.jpg"
import coal from "../images/oilandcoal.jpg"
import 'boxicons/css/boxicons.min.css'; 


const IndexPage: React.FC<PageProps> = () => {
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
            <span className='font-black-ops text-orange-600'>McCann</span> Fuels and Haulage
          </h1>
          <p className="pb-6 text-2xl">Supplying oil, coal, and other home heating solutions to Tyrone and Armagh as well as offering haulage and storage services.</p>
          <button
            className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 font-medium text-xl px-5 py-2.5 me-2 mb-2"
          >
            Contact us
          </button>
          </section>

          {/* New Section for Images */}
        
          <div className="flex flex-col lg:flex-row w-full">
          {/* Image 1 */}
          <Link to="/fuel" className="relative block w-full lg:w-1/2">
            <img src={coal} alt="lorry" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-stone-900 hover:bg-opacity-20 flex flex-col justify-between p-4">
              <h2 className="text-orange-600 font-semibold text-4xl">Solid Fuels</h2>
              <p className="text-white text-xl font-semibold underline">Click to learn more</p>
            </div>
          </Link>

          {/* Image 2 */}
          <Link to="/haulage" className="relative block w-full lg:w-1/2">
            <img src={lorry} alt="Description" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-stone-900 hover:bg-opacity-20 flex flex-col justify-between p-4">
              <h2 className="text-orange-600 font-semibold text-4xl">Haulage and storage</h2>
              <p className="text-white text-xl font-semibold underline">Click to learn more</p>
            </div>
          </Link>
        </div>


          {/* 

          // About Us Section
          
          */}
          <section
            className="text-center px-8 lg:px-64 py-12"
          >
            <h2 className="text-orange-600 text-4xl font-semibold pb-8">About Us</h2>
            <p className="pb-6 text-xl">We deliver quality home heating solutions to counties Tyrone and Armagh from our base at Dungannon at competitive prices. Including oil at a competitive price and a wide range of coal. </p>
            <p className="pb-6 text-xl">Our haulage and storage services are flexible, reliable, and cost-effective. </p>
            <p className="pb-2 text-xl">Follow us on Facebook to get updates on deals and new services:</p>
            <div className="flex justify-center mt-4">
            <a href="https://www.facebook.com/mccanndungannon/">
              <i className='bx bxl-facebook-square text-6xl text-sky-600 hover:text-sky-800'></i>
            </a>
            </div>
          </section>

          {/*

          // Contact Us Section

          */}
          <section
            className="bg-stone-300 text-center px-8 lg:px-24 py-12"
          >
            <h2 className="text-orange-600 text-4xl font-semibold pb-8">Contact Us</h2>
            <p className="pb-6 text-xl">Give us a ring to discuss your requirements, get a quote, or see if we can deliver to your area.</p>
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
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
