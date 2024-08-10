// import { ApiResponse } from "../../utils/ApiResponse.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const healthcheck = asyncHandler(async (req, res) => {
  //   const response = new ApiResponse(200, { uptime: process.uptime() });
  //   res.status(response.statusCode).json(response);
  //   console.log("Healthcheck function called");
  return res.status(200).json(
    new ApiResponse(200, "ok", "Health check passed", {
      uptime: process.uptime(),
    })
  );
});

export { healthcheck };
