import type { CollectionConfig } from 'payload/types'
import { Suppliers } from './Suppliers'
import { PurchaseOrderHook } from '@/hooks/purchase-order'
import { Products } from './Products'

export const PurchaseOrders: CollectionConfig = {
  slug: 'purchase-orders',
  admin: {
    useAsTitle: 'Supplier',
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'Supplier', type: 'relationship', relationTo: Suppliers.slug },
        { name: 'Address', type: 'text' },
      ],
    },
    {
      name: 'Delivery Status',
      type: 'radio',
      defaultValue: 'pending',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Delivered',
          value: 'delivered',
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
  ],
  hooks: {
    afterChange: [PurchaseOrderHook],
  },
}
