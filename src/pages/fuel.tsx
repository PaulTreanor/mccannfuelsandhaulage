import React from 'react'
import Footer from '../components/Footer'
import type { PageProps, HeadFC } from 'gatsby'
import storage from '../images/storage.jpg'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import fuels from '../data/fuels.json'

// Fuel image imports 
import premiumDoublesImage from '../images/coals/premium-doubles.webp';
import premiumCoalImage from '../images/coals/premium-coal.png';
import houseCoalImage from '../images/coals/house-coal.jpg';
import ligniteImage from '../images/coals/lignite.jpg';
import tripleImage from '../images/coals/triple.jpg';
import ecoImage from '../images/coals/eco.webp';
import smallCalcoImage from '../images/coals/small-calco.png';
import largeCalcoImage from '../images/coals/large-calco.jpg';
import roughSlackImage from '../images/coals/roughslack.jpg';
import fineSlackImage from '../images/coals/fine-slack.png';
import briquettesImage from '../images/coals/briquettes.jpg';
import firewoodImage from '../images/coals/firewood.jpg';

const fuelImagePaths = {
  "Premium Doubles": premiumDoublesImage,
  "Premium Coal": premiumCoalImage,
  "House Coal": houseCoalImage,
  "Lignite": ligniteImage,
  "Triple": tripleImage,
  "Eco": ecoImage,
  "Small Calco": smallCalcoImage,
  "Large Calco": largeCalcoImage,
  "Rough Slack": roughSlackImage,
  "Fine Slack": fineSlackImage,
  "Briquettes": briquettesImage,
  "Logs and Firelighters also available": firewoodImage
}


const Fuel: React.FC<PageProps> = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-stone-100">

          {/*

          // Hero Section

          */}
          <section className="text-left px-8 lg:px-32 pt-12 pb-8">
            <h1 className="text-6xl pb-6">
              <span className='font-black-ops text-orange-600'>McCann</span> Fuels
            </h1>
            
            {/* Introduce the services succinctly */}
            <p className="pb-6 text-2xl">
              Offering home delivery of solid fuels and coal. Collection is available from our yard in Dungannon.
            </p>
            
            {/* Call to Action for deals and contact */}
            <p className="pb-6 text-2xl">
              Get the latest deals by following us on  
              <a className='text-sky-600 hover:text-sky-700' href="https://www.facebook.com/mccanndungannon"> Facebook </a>
               or contact Mark at <a className='text-sky-600 hover:text-sky-700' href="tel:07866-413-254">07866-413-254.</a>
            </p>

          </section>



         

        {/* 

        Fuel Section
        
        */}

        <section
            className="bg-stone-100 text-center px-8 lg:px-24 py-12"
          >
            <h2 className="text-orange-600 text-4xl font-semibold pb-6">Coal and Solid Fuels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {fuels.map((fuel) => (
              <Card
                key={fuel.name}
                fuelName={fuel.name}
                image={fuelImagePaths[fuel.name]}
                type={fuel.type}
                heat={fuel.heat}
                burn={fuel.burn}
                ash={fuel.ash}
              />
            ))}
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


export default Fuel

export const Head: HeadFC = () => <title>Fuels</title>
