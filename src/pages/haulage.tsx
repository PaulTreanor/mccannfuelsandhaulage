import React from 'react'
import Footer from '../components/Footer'
import type { PageProps, HeadFC } from 'gatsby'

const Haulage: React.FC<PageProps> = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow bg-gray-100">
          <section
            className="text-center p-8"
          >
            <h1>McCann Fuels and Haulage</h1>
            <p>Supplying oil, coal, and other home heating solutions to Tyrone and Armagh as well as offering haulage and storage services.</p>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Contact us</button>
          </section>
      </main>
      <Footer />
    </div>

  )
}


export default Haulage

export const Head: HeadFC = () => <title>Haulage</title>
