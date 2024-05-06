import Test from '@/components/test'
import type { CollectionConfig } from 'payload/types'
import { Products } from './Products'

export const Transactions: CollectionConfig = {
  slug: 'transactions',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'Product', type: 'relationship', relationTo: Products.slug },
        {
          name: 'Transaction Type',
          type: 'select',
          defaultValue: 'sale',
          options: [
            { label: 'Sale', value: 'sale' },
            { label: 'Restock', value: 'restock' },
            { label: 'Return', value: 'return' },
          ],
        },
      ],
    },
    { name: 'Quantity Change', type: 'number', min: -100, max: 100 },
  ],
}
