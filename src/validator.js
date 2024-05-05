import * as yup from "yup";

export const typeValidator = yup
  .string()
  .min(2)
  .label("Type");

export const nameValidator = yup
  .string()
  .min(2)
  .required()
  .label("Name");

export const addressValidator = yup
  .string()
  .min(5)
  .required()
  .label("Address");

export const cityValidator = yup
  .string()
  .min(2)
  .required()
  .label("City");

export const postalCodeValidator = yup
  .string()
  .min(5)
  .required()
  .label("Postal Code");

export const countryValidator = yup
  .string()
  .min(2)
  .required()
  .label("Country");
export const cuisineTypeValidator = yup
  .string()
  .min(1)
  .label("Type de cuisine");
export const starsValidator = yup
  .number()
  .min(1)
  .max(3)
  .label("Nombre d'étoiles");
export const averagePriceValidator = yup
  .number()
  .min(1)
  .max(5)
  .label("Prix moyen");
export const artMovementValidator = yup
  .string()
  .min(1)
  .label("Courant artistique");
export const artTypeValidator = yup
  .string()
  .min(1)
  .label("Type d'art");
export const entryFeeValidator = yup
  .string()
  .oneOf(['gratuit', '1', '2', '3', '4', '5'], 'Choix invalide.')
  .label("Gratuit ou payant");
export const priceValidator = yup
  .number()
  .label("Prix");
export const barTypeValidator = yup
  .string()
  .min(2)
  .label("Bar Type");
export const parkTypeValidator = yup
  .string()
  .min(1)
  .label("Type de parc");
export const publicPrivateValidator = yup
  .string()
  .oneOf(['public', 'privé'], 'Choix invalide.')
  .label("Public ou privé");
