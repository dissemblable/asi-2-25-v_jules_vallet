import { retailschema } from "@/db/schemas/retailSchema"
import mongoose from "mongoose"


export const RetailModel = 
    mongoose.models.Retail || mongoose.model("Retail", retailschema)