import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-100">

          {/*

          // Hero Section

          */}
          <section
            className="text-center p-8"
          >
            <h1 className="font-black-ops">McCann Fuels and Haulage</h1>
            <p>Supplying oil, coal, and other home heating solutions to Tyrone and Armagh as well as offering haulage and storage services.</p>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Contact us</button>
          </section>

          {/* New Section for Images */}
        
          <div className="flex flex-col lg:flex-row w-full">
          {/* Image 1 */}
          <Link to="/fuel" className="relative block w-full lg:w-1/2">
            <img src="https://via.placeholder.com/600x400" alt="Description" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-between p-4">
              <h2 className="text-white text-2xl">Large Title 2</h2>
              <p className="text-white text-lg underline">Click to learn more</p>
            </div>
          </Link>

          {/* Image 2 */}
          <Link to="/haulage" className="relative block w-full lg:w-1/2">
            <img src="https://via.placeholder.com/600x400" alt="Description" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-between p-4">
              <h2 className="text-white text-2xl">Large Title 2</h2>
              <p className="text-white text-lg underline">Click to learn more</p>
            </div>
          </Link>
        </div>


          {/* 

          // About Us Section
          
          */}
          <section
            className="text-center p-8"
          >
            <p>We deliver quality home heating solutions to counties Tyrone and Armagh from our base at Dungannon at competitive prices. Including oil at a competitive price and a wide range of coal. </p>
            <p>Our haulage and storage services are flexible, reliable, and cost-effective. </p>
            <p> Contact us at 07866-413-254 to discuss your requirements or get a quote.</p>
            <div className="flex justify-center mt-4">
              <a href="https://www.facebook.com/McCannFuelsHaulage" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-blue-600" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.049c0 4.017 2.926 7.347 6.75 7.95v-5.625h-2v-2.325h2V6.75c0-2 1.224-3.1 3-3.1.857 0 1.593.064 1.808.093v2.1h-1.24c-1.225 0-1.46.583-1.46 1.437v1.884h2.5l-.325 2.325h-2.175V16c3.824-.603 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
            </div>
            <p>Follow us on Facebook to get updates on deals and new services😊</p>
          </section>

          {/*

          // Contact Us Section

          */}
          <section
            className="text-center p-8"
          >
            <h2>Contact Us</h2>
            <p>Give us a ring or send an email to make an order or find out if we can deliver to your area.</p>
            <p>Phone: 07866-413-254</p>

            <p>Address: 65 Kilnacart Road, Dunamoney, Dungannon, BT70 1PD</p>
            <p>Email: <a href="mailto: mccannhaulageltd@gmail.com">mccannhaulageltd@gmail.com</a></p>
          </section>
      </main>
      <Footer />
    </div>

  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
