/* eslint-disable new-cap, array-callback-return */
import express from 'express';
// import Purchase from '../models/purchase';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Seat.find().populate(['section']).exec((err, seats) => {
    res.send({ seats });
  });
});

router.post('/', (req, res) => {
  const purchased = req.body.purchased;
  const id = req.body.id;
  Seat.findByIdAndUpdate(id, { purchased }, (updateErr, seat) => {
    res.send({ seat });
  });
  // seat.save(() => res.send({ seat }));
});
