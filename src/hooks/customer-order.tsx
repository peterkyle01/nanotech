import { CollectionAfterChangeHook } from 'payload/types'
import { unstable_noStore as noStore } from 'next/cache'

export const CustomerOrderHook: CollectionAfterChangeHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  try {
    const total = await req.payload.findByID({
      collection: 'products',
      id: doc.Name,
    })
    try {
      await req.payload.create({
        collection: 'transactions',
        data: {
          'Transaction Type': 'sale',
          Product: doc.Name,
          Quantity: doc.Quantity,
          Total: total['1pcPrice']! * doc.Quantity!,
          User: {
            relationTo: 'customer',
            value: doc.Customer,
          },
        },
      })
      if (total.Quantity! > doc.Quantity) {
        const remainingProducts = total.Quantity! - doc.Quantity
        console.log({
          ...total,
          Quantity: remainingProducts,
        })
        await req.payload.update({
          collection: 'products',
          id: doc.Name,
          data: {
            '1pcPrice': total['1pcPrice'],
            Category: total.Category,
            Name: total.Name,
            Description: total.Description,
            'Product Image': total['Product Image'],
            Quantity: remainingProducts,
          },
        })
        console.log('done')
      }
    } catch (error) {
      console.log(`Create Transaction: An error ${error} occured!`)
    }
  } catch (error) {
    console.log(`Get Total: An error ${error} occured!`)
  } finally {
    return doc
  }
}
