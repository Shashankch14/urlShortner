const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true, sparse: true,index:true
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    }

  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;

// const mongoose = require("mongoose");

// const urlSchema = new mongoose.Schema(
//   {
//     shortId: {
//       type: String,
//       required: true,
//       unique: true, sparse: true,index:true
//     },
//     redirectURL: {
//       type: String,
//       required: true,
//     },
//     visitHistory: [{ timestamp: { type: Number } }],
//   },
//   { timestamps: true }
// );
// // urlSchema.pre("save",function(next, done) {
// //   var self = this;
// //   mongoose.models["User"].findOne({shortId : self.shortId},function(err, user) {
// //       if(user) {
// //           self.invalidate("user","shortId must be unique");
// //       }
// //       done();
// //   });
// //   next();
// // });

// const URL = mongoose.model("url", urlSchema);

// module.exports = URL;
