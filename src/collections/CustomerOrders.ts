import type { CollectionConfig } from 'payload/types'
import { Customer } from './Customers'
import { Products } from './Products'

export const CustomerOrders: CollectionConfig = {
  slug: 'customer-orders',
  admin: {
    useAsTitle: 'Customer',
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'Customer', type: 'relationship', relationTo: Customer.slug },
        { name: 'Shipping Address', type: 'text' },
      ],
    },
    {
      name: 'Payment Method',
      type: 'radio',
      defaultValue: 'mpesa',
      options: [
        {
          label: 'Mpesa',
          value: 'mpesa',
        },
        {
          label: 'Bank',
          value: 'bank',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'Products',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'Name', type: 'relationship', relationTo: Products.slug },
            { name: 'Quantity', type: 'number' },
          ],
        },
      ],
    },
  ],
}
