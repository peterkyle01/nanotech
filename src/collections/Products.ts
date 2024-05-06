import type { CollectionConfig } from 'payload/types'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'Name',
    
  },
  fields: [
    {
      name: 'Product Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'row',
      required: true,
      fields: [
        {
          name: 'Name',
          type: 'text',
        },
        {
          name: '1pcPrice',
          type: 'number',
        },
      ],
    },
    {
      type: 'row',
      required: true,
      fields: [
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
          max: 100,
          min: 1,
        },
      ],
    },
    {
      name: 'Description',
      type: 'textarea',
      minLength: 10,
      maxLength: 200,
      required: true,
    },
  ],
}
