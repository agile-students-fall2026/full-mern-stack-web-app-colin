const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutUsSchema = new Schema(
  {
    aboutus: {
      type: String,
      required: true,
    },
    imageURL: {
        type: String,
        required: true,
        
    }
  },
)

// create mongoose Model
const AboutUs = mongoose.model('AboutUs', aboutUsSchema)

// export the model so other modules can import it
module.exports = {
  AboutUs,
}
