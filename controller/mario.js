const Mario = require('../model/Mario');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.getMarios = asyncHandler(async (req, res, next) => {
  const marios = await Mario.find();
  res.status(200).json({
    success: true,
    data: marios,
  });
});

exports.getMario = asyncHandler(async (req, res, next) => {
  const mario = await Mario.findById(req.params.id);
  if (!mario) {
    return next(
      new ErrorResponse(`Mario not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: mario });
});

exports.createMario = asyncHandler(async (req, res, next) => {
  const mario = await Mario.create(req.body);
  res.status(201).json({
    success: true,
    data: mario,
  });
});

exports.updateMario = asyncHandler(async (req, res, next) => {
  let mario = await Mario.findById(req.params.id);
  if (!mario) {
    return next(
      new ErrorResponse(`Mario not found with id of ${req.params.id}`, 404)
    );
  }

  mario = await Mario.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: mario });
});

exports.deleteMario = asyncHandler(async (req, res, next) => {
  const mario = await Mario.findById(req.params.id);
  if (!mario) {
    return next(
      new ErrorResponse(`Mario not found with id of ${req.params.id}`, 404)
    );
  }
  mario.remove();
  res.status(200).json({ success: true, data: {} });
});
