import mongoose from "mongoose";


const LinkSchema = new mongoose.Schema({
  handle: {type: String, required: true},
  link: [{url: {type: String, required: true}, linkText: {type: String, required: true}}],
  description: {type: String},
  profile: {type: String},
},);



export default mongoose.models.Link || mongoose.model("Link", LinkSchema);