import { CollectionAfterChangeHook } from 'payload/types'

export const UpdateProductCustomerHook: CollectionAfterChangeHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  try {
    console.log(doc)
    const total = await req.payload.findByID({
      collection: 'products',
      id: doc.Name,
    })
    try {
      if (total.Quantity! > doc.Quantity) {
        const remainingProducts = total.Quantity! - doc.Quantity
        await req.payload.update({
          collection: 'products',
          id: doc.Name,
          data: {
            Quantity: remainingProducts,
          },
        })
      }
    } catch (error) {
      console.log(`Update Product Quantity: An error ${error} occured!`)
    }
  } catch (error) {
    console.log(`Get Product: An error ${error} occured!`)
  }
}
