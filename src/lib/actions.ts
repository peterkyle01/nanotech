'use server'

import { unstable_noStore as noStore } from 'next/cache'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function getTotalRevenue() {
  noStore()
  const payload = await getPayload({
    config: configPromise,
  })
  const { docs } = await payload.find({
    collection: 'transactions',
  })
  return docs.reduce((sum, value) => sum + Number(value.Total!), 0)
}

export async function getTotalRestock() {
  noStore()
  const payload = await getPayload({
    config: configPromise,
  })
  const { docs } = await payload.find({
    collection: 'transactions',
    where: {
      'Transaction Type': {
        equals: 'restock',
      },
    },
  })
  return docs.reduce((sum, value) => sum + Number(value.Total!), 0)
}

export async function getTotalSales() {
  noStore()
  const payload = await getPayload({
    config: configPromise,
  })
  const { docs } = await payload.find({
    collection: 'transactions',
    where: {
      'Transaction Type': {
        equals: 'sale',
      },
    },
  })
  return docs.reduce((sum, value) => sum + Number(value.Total!), 0)
}

export async function getTotalProducts() {
  noStore()
  const payload = await getPayload({
    config: configPromise,
  })
  const { docs } = await payload.find({
    collection: 'products',
  })
  return docs.length
}
