import type { CollectionConfig } from 'payload/types'
import { Products } from './Products'
import { Suppliers } from './Suppliers'
import { Customer } from './Customers'

export const Transactions: CollectionConfig = {
  slug: 'transactions',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'User', type: 'relationship', relationTo: [Suppliers.slug, Customer.slug] },
        {
          name: 'Transaction Type',
          type: 'select',
          defaultValue: 'sale',
          options: [
            { label: 'Sale', value: 'sale' },
            { label: 'Restock', value: 'restock' },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'Product', type: 'relationship', relationTo: Products.slug },
        { name: 'Quantity', type: 'number', min: 1, max: 50 },
      ],
    },
    {
      name: 'Total',
      type: 'number',
    },
  ],
}
