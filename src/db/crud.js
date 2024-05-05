import { RetailModel } from "@/db/models/retailModel";


export const createRetail = async ({ type, name, address, city, postalCode, country, cuisineType, stars, averagePrice, artMovement, artType, entryFee, barType, parkType, publicPrivate, price }) => {
  const newRetail = new RetailModel({ 
    type, 
    name, 
    address, 
    city, 
    postalCode, 
    country, 
    restaurant: {cuisineType, stars, averagePrice},
    musee: {artMovement, artType, entryFee, price},
    bar: {barType, averagePrice},
    parc:{parkType, publicPrivate, entryFee, price},
  });

  await newRetail.save();

  return newRetail;
};

export const readRetails = async () => await RetailModel.find();
export const readRetail = async (retailId) => await RetailModel.findById(retailId);

export const updateRetail = async (retailId, { type, name, address, city, postalCode, country, cuisineType, stars, averagePrice, artMovement, artType, entryFee, barType, parkType, publicPrivate, price }) => {
  const input = {
    type: type || undefined,
    name: name || undefined,
    address: address || undefined,
    city: city || undefined,
    postalCode: postalCode || undefined,
    country: country || undefined,
    restaurant: {
      cuisineType: cuisineType || undefined, 
      stars: stars || undefined, 
      averagePrice: averagePrice || undefined, 
    },
    musee: {
      artMovement: artMovement || undefined, 
      artType: artType || undefined, 
      entryFee: entryFee || undefined, 
      price: price || undefined
    },
    bar: {
      barType: barType || undefined, 
      averagePrice: averagePrice || undefined, 
    },
    parc:{
      parkType: parkType || undefined, 
      publicPrivate: publicPrivate || undefined, 
      entryFee: entryFee || undefined, 
      price: price || undefined
    },
  };

  const updatedRetail = await RetailModel.findByIdAndUpdate(retailId, input, { new: true });

  return updatedRetail;
};

export const deleteRetail = async (retailId) => {
  const retail = await RetailModel.findOneAndDelete({ _id: retailId });

  if (!retail) {
    return null;
  }

  return retail;
};
