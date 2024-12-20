import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  slug: {
    type: String,
    required: [true, 'Product slug is required']
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative']
  },
  image: {
    type: String,
    required: [true, 'Product image is required']
  },
  quantity: {
    type: Number,
    required: [true, 'Product quantity is required'],
    min: [0, 'Quantity cannot be negative'],
    default: 0
  },
  discount: {
    type: Number,
    min: [0, 'Discount cannot be negative'],
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);