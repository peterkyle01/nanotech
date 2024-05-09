import type { CollectionConfig } from 'payload/types'

export const Suppliers: CollectionConfig = {
  slug: 'suppliers',
  admin: {
    useAsTitle: 'Name',
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'Name', type: 'text' },
        { name: 'Phone Number', type: 'number' },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'Email', type: 'text' },
        { name: 'Address', type: 'text' },
      ],
    },
  ],
}
