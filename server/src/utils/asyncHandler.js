const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = (fn) => async (req, res, next) => {
//   //   Promise.resolve(fn(req, res, next)).catch(next);

//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     // res.status(500).json({message: error.message});
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message || "Internal Server Error",
//     });
//   }
// };
