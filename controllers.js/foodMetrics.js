import { response } from 'express';
import FoodMetric from '../models/foodMetric.js';

export const createFoodMetric = async( req, res = response ) => {
    try {
        const foodMetric = new FoodMetric( req.body );
        const foodMetricDB = await foodMetric.save();

        res.json({
            ok: true,
            foodMetric: foodMetricDB
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error creating food metric',
            error: JSON.stringify(error),
        });
    }
}

export const getAllFoodMetrics = async(req, res = response ) => {
    const foodMetrics = await FoodMetric.find();

    res.json({
        ok: true,
        foodMetrics
    });
}

export const getFoodMetricBySearch = async(req, res = response ) => {
    const search = req.params.search;
    const regex = new RegExp( search, 'i' );

    const foodMetrics = await FoodMetric.find({ name: regex });

    res.json({
        ok: true,
        foodMetrics
    });
}