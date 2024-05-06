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
        {
          name: 'Category',
          type: 'select',
          defaultValue: 'smartphone',
          options: [
            {
              label: 'Smart Phone',
              value: 'smartphone',
            },
            {
              label: 'PC & Laptop',
              value: 'pc_and_laptop',
            },
            {
              label: 'Tablet',
              value: 'tablet',
            },
            {
              label: 'Smart Watch',
              value: 'smartwatch',
            },
            {
              label: 'TV & FlatScreen',
              value: 'tv_and_flatscreen',
            },
          ],
        },
        {
          name: 'Quantity',
          type: 'number',
          min: 10,
          max: 100,
        },
      ],
    },
  ],
}
