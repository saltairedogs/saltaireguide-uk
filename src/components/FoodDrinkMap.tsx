"use client"

import React from 'react'
import dynamic from 'next/dynamic'

// Ensure the map never renders on the server (Leaflet needs window/document)
const MapClient = dynamic(() => import('@/components/MapClient'), { ssr: false })

type ListingCoord = { lat: number; lng: number }
type Listing = {
  slug: string
  name: string
  excerpt?: string
  coords?: ListingCoord
  website?: string
  phoneTel?: string
  priceFrom?: string
}

export default function FoodDrinkMap({
  listings,
  center = { lat: 53.8381, lng: -1.7922 },
  zoom = 16,
}: {
  listings: Listing[]
  center?: ListingCoord
  zoom?: number
}) {
  return <MapClient listings={listings} center={center} zoom={zoom} />
}
