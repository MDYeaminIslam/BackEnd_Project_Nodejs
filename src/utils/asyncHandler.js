//1st method
const asyncHandler = (requestHandler) => {
  (req,res,next) =>{
    Promise.resolve(requestHandler(req,res,next)).catch((err) =>{next(err)});
  }
}



//higher order function

export { asyncHandler }

//2nd method
/*
This code is work like this :
const asyncHandler = () => {}
const asyncHandler = (fn) =>() => {}
const asyncHandler = (fn) => {async () => {}} we can avoid the {} */

// const asyncHandler = (fn) = async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }