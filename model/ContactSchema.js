import { Schema, model, models } from "mongoose";

const contactSchema = new Schema({
    email:{
        type:String,
        required:true,
        validate: {
            validator: function (email) {
              const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
              return emailRegex.test(email);
            },
            message: "A valid email is required",
          },
        lowercase: true,
        trim: true,
        sparse:true
    },
    subject:{
        type: String,
        required:true,
        trim:true
    },
    message:{
        type: String,
        required:true,
        trim:true,
        minLength: 10
    },
},
{ toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true });

const Contact = models.contact || model('contact', contactSchema);

export default Contact;