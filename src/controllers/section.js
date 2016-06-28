/* eslint-disable new-cap */
import express from 'express';
import Section from '../models/section';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Section.find().populate(['seats']).exec((err, sections) => {
    res.send({ sections });
  });
});

router.post('/', (req, res) => {
  // loop for quantity
  const section = new Section(req.body);
  const seats = [];
  const seatIDs = [];
  section.save(() => {
    for (let i = 0; i < req.body.quantity; i++) {
      const seat = new Seat({ section: section.id });
      seatIDs.push(seat.id);
      seats.push(seat);
    }
    Seat.insertMany(seats, (err, data) => {
      Section.findByIdAndUpdate(section.id, { seats }, (updateErr) => {
        Section.find().populate(['seats']).exec((err2, sections) => {
          res.send({ sections });
        });
      });
    });
  });
});
