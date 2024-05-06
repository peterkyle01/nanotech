import { postgresAdapter } from '@payloadcms/db-postgres'
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
// import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { azureBlobStorageAdapter } from '@payloadcms/plugin-cloud-storage/azure'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Icon, Logo } from './components/shared/icons'
import { Transactions } from './collections/Transactions'
import { Products } from './collections/Products'
import { Customer } from './collections/Customers'
import { CustomerOrders } from './collections/CustomerOrders'
import { PurchaseOrders } from './collections/PurchaseOrders'
import { Suppliers } from './collections/Suppliers'
import Dashboard from './components/shared/dashboard'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const adapter = azureBlobStorageAdapter({
  connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING as string,
  containerName: process.env.AZURE_STORAGE_CONTAINER_NAME as string,
  allowContainerCreate: process.env.AZURE_STORAGE_ALLOW_CONTAINER_CREATE === 'true',
  baseURL: process.env.AZURE_STORAGE_ACCOUNT_BASEURL as string,
})

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      beforeDashboard: [Dashboard],
      graphics: {
        Icon,
        Logo,
      },
    },
  },
  collections: [
    Customer,
    CustomerOrders,
    Products,
    PurchaseOrders,
    Suppliers,
    Transactions,
    Media,
    Users,
  ],
  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  plugins: [
    cloudStorage({
      collections: {
        [Media.slug]: {
          adapter,
          //  vercelBlobAdapter({
          //   token: process.env.BLOB_READ_WRITE_TOKEN || '',
          //   storeId: process.env.BLOB_STORE_ID || '',
          // }),
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
})
