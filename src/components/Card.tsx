import React from 'react'

export default function Card({ fuelName, image, type, heat, burn, ash }) {
  return (
    <div className="max-w-sm bg-stone-50 border border-stone-200 rounded-lg shadow">
        <div className="h-64 overflow-hidden">
          <img className="rounded-t-lg w-full h-auto object-cover object-top" src={image} alt="" />
        </div>
        <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-900">{fuelName}</h5>
        {type && <p className="mb-2 text-lg text-stone-900">{type}</p>}
        {heat && <p className="mb-2 text-lg text-stone-900">Heat output: {`🔥`.repeat(heat)}</p>}
        {burn && <p className="mb-2 text-lg text-stone-900">Burn life: {`⏳`.repeat(burn)}</p>}
        {ash && <p className="mb-2 text-lg text-stone-900">Ash: {ash}</p>}
      </div>
    </div>
  )
}
