import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    phone: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Post', PostSchema);
