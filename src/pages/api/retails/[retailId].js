import { mw } from "@/api/mw"
import { readRetail, deleteRetail, updateRetail } from "@/db/crud"

const handle = mw(async (req, res) => {
  const { retailId } = req.query

  if (req.method === "GET") {
    const retail = await readRetail(retailId)

    if (!retail) {
      res.status(404).send({ error: "Not found" })

      return
    }

    res.send(retail)

    return
  }

  if (req.method === "PATCH") {
    const {type, name, address, city, postalCode, country, cuisineType, stars, averagePrice, artMovement, artType, entryFee, barType, parkType, publicPrivate, price} = req.body
    
    const updatedRetail = await updateRetail(retailId, { type, name, address, city, postalCode, country, cuisineType, stars, averagePrice, artMovement, artType, entryFee, barType, parkType, publicPrivate, price })

    if (!updatedRetail) {
      res.status(404).send({ error: "Not found" })

      return
    }

    res.send(updatedRetail)

    return
  }

  if (req.method === "DELETE") {
    const retailToBeDelete = await deleteRetail(retailId)

    if (!retailToBeDelete) {
      res.status(404).send({ error: "Not found" })

      return
    }

    res.send(retailToBeDelete)

    return
  }

  res.status(404).send({ error: "Not found" })
})

export default handle
