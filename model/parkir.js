import mongoose from "mongoose";

// Membuat Schema
export const Parkir = mongoose.model('Parkir', { 
    nomor: String,
    masuk: String
});