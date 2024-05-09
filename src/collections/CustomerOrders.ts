import type { CollectionConfig } from 'payload/types'
import { Customer } from './Customers'
import { Products } from './Products'
import { CustomerOrderHook } from '@/hooks/customer-order'
import { UpdateProductCustomerHook } from '@/hooks/update-product-customer'

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
      type: 'row',
      fields: [
        { name: 'Name', type: 'relationship', relationTo: Products.slug },
        { name: 'Quantity', type: 'number', min: 1, max: 50 },
      ],
    },
  ],
  hooks: {
    afterChange: [CustomerOrderHook],
  },
}
