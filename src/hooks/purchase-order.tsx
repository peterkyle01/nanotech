import { CollectionAfterChangeHook } from 'payload/types'

export const PurchaseOrderHook: CollectionAfterChangeHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  try {
    const total = await req.payload.findByID({
      collection: 'products',
      id: doc.Product,
    })
    try {
      await req.payload.create({
        collection: 'transactions',
        data: {
          'Transaction Type': 'restock',
          Product: doc.Product,
          Quantity: doc.Quantity,
          Total: total['1pcPrice']! * doc.Quantity!,
          User: {
            relationTo: 'suppliers',
            value: doc.Supplier,
          },
        },
      })
    } catch (error) {
      console.log(`Create : An error ${error} occured!`)
    }
  } catch (error) {
    console.log(`Total: An error ${error} occured!`)
  }
}
