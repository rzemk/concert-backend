/* eslint-disable new-cap, array-callback-return */
import express from 'express';
// import Purchase from '../models/purchase';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  console.log('seat get');
  Seat.find().populate(['section']).exec((err, seats) => {
    res.send({ seats });
  });
});

router.post('/', (req, res) => {
  const purchased = req.body.purchased;
  const id = req.body.id;
  console.log('seat post');
  console.log(req.body);
  Seat.findByIdAndUpdate(id, { purchased }, (updateErr, seat) => {
    console.log('update error', updateErr);
    res.send({ seat });
  });
  // seat.save(() => res.send({ seat }));
});
