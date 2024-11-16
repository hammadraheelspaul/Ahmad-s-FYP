const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const product = new mongoose.Schema(
  {
    id: ObjectId,
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },

    projectDetails: {
      media: [String],
      description: {
        type: String,
        maxlength: 2000,
      },
      location: {
        type: String,
        maxlength: 200,
      },
      
      story : {type: String},

      risks: { type: String },
      
      FAQs: [
        {
          question: { type: String  },
          answer: { type: String},
        },
      ],

      perks:[
        {
          title:{type: String},
          description:{type: String},
          amount: {type: Number}
        }
      ]
    },

    tagline : {
      type :String
    },

    imageUrl: {
      type: String,
      default:
        "https://icon-library.com/images/leaf-icon-png/leaf-icon-png-24.jpg",
    },

    createdBy: { type: ObjectId, ref: "User", required: true },

    neededAmount: { type: Number, min: 0 },
    collectedAmount: { type: Number, default: 0 },

    startDate: { type: Date, default: Date.now },
    
    endDate: Date,

    status: {
      type: String,
      enum: ["open", "closed", "completed"],
      default: "open",
    },

    category: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },

    subcategory: String,

    tags: [String],

    duration : String,

    backers: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        amount: { type: Number, required: true },
        status: { type: String, default: "pending"},
        paymentRepiptURL: {
          type: String,
          default:
            "https://icon-library.com/images/leaf-icon-png/leaf-icon-png-24.jpg",
        },
      },
    ],

    rewards: [{ type: ObjectId, ref: "Rewards" }],

    updates: [{ body: String, date: Date }],

    isFeatured: { type: Boolean, default: false },

    reviews: [
      {
        user: { type: ObjectId, ref: "User" },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String, maxlength: 200 },
      },
    ],

    reviewCount: {
      type: Number,
      default: 0,
    },

    comments: [
      {
        user: { type: ObjectId, ref: "User" },
        comment: { type: String, required: true },
        date: { type: Date, default: Date.now },
      },
    ],

    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    socialMediaLinks: [
      {
        type: String,
        validate: {
          validator: (v) => /^https?:\/\//.test(v),
          message: "Must be a valid URL.",
        },
      },
    ],
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", product);
