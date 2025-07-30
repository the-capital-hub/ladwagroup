import mongoose from 'mongoose';
import { DEFAULT_PRODUCT_DESCRIPTION } from '@/lib/defaults';

const specSchema = new mongoose.Schema({
  key: String,
  value: String,
});

const productSchema = new mongoose.Schema(
  {
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: {
      type: String,
      default: DEFAULT_PRODUCT_DESCRIPTION,
    },
    longDescription: String,
    image: String,
    gallery: [String],
    keyFeatures: [String],
    additionalFeatures: [String],
    weight: String,
    dimension: String,
    specifications: [specSchema],
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
