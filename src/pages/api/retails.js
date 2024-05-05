import { mw } from "@/api/mw";
import { createRetail, readRetails } from "@/db/crud"; 


const handle = mw(async (req, res) => {
  if (req.method === "GET") {
    const retails = await readRetails()

    res.send(retails)

    return
  }

  if (req.method === "POST") {
    const {type, name, address, city, postalCode, country, cuisineType, stars, averagePrice, artMovement, artType, entryFee, barType, parkType, publicPrivate, price} = req.body
/*
    if (!type || !name || !address || !city || !postalCode || !country || !cuisineType || !stars || !averagePrice) {
      res.status(422).send({ error: "missing argument" })

      return
    }*/

    const newRetail = await createRetail({ type, name, address, city, postalCode, country, cuisineType, stars, averagePrice, artMovement, artType, entryFee, barType, parkType, publicPrivate, price})
    res.send(newRetail)
    return
  }
  res.status(404).send({ error: "Not found" })
})

export default handle