import { Schema, model } from 'mongoose';

const FoodMetricSchema = Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String
    },
    grams: {
        type: Number
    },
    calories: {
        type: Number
    }
});

FoodMetricSchema.index(
    { name: 1, brand: 1 },
    { unique: true }
);

FoodMetricSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})
  
const FoodMetric = model('FoodMetric', FoodMetricSchema);
  
export default FoodMetric;