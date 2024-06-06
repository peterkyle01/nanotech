'use server'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function getTotalRevenue() {
  const payload = await getPayload({
    config: configPromise,
  })
  const { docs } = await payload.find({
    collection: 'transactions',
  })
  return docs.reduce((sum, value) => sum + Number(value.Total!), 0)
}

export async function getTotalRestock() {
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
  const payload = await getPayload({
    config: configPromise,
  })
  const { docs } = await payload.find({
    collection: 'products',
  })
  return docs.reduce((sum, value) => sum + Number(value.Quantity!), 0)
}
