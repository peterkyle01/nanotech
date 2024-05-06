import type { CollectionConfig } from 'payload/types'
import { Suppliers } from './Suppliers'

export const PurchaseOrders: CollectionConfig = {
  slug: 'purchase-orders',
  admin: {
    useAsTitle: 'Supplier',
  },
  fields: [
    { name: 'Supplier', type: 'relationship', relationTo: Suppliers.slug },
    {
      type: 'row',
      fields: [
        { name: 'Total Cost', type: 'number' },
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
      ],
    },
  ],
}
