const { Schema } = require('mongoose');

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: 'group',
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = userSchema;
