const sendSuccessResponse = (res, message, data = null) => {
  return res
    .status(200)
    .json({ status_code: 200, success: true, message: message, data: data });
};

const sendSuccessResponseWithData = (res, message, data = null) => {
  return res
    .status(201)
    .json({ status_code: 201, success: true, message: message, data: data });
};

const sendErrorResponse = (res, message, data = null, errorDetails = null) => {
  return res.status(400).json({
    status_code: 400,
    success: false,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

const unauthorizeResponse = (
  res,
  message,
  data = null,
  errorDetails = null
) => {
  return res.status(401).json({
    status: 401,
    success: false,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

const forribdenResponse = (res, message, data = null, errorDetails = null) => {
  return res.status(403).json({
    status_code: 403,
    success: false,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

const notFoundResponse = (res, message, data = null, errorDetails = null) => {
  return res.status(404).json({
    status_code: 404,
    success: false,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

const alreadyExistsResponse = (
  res,
  message,
  data = null,
  errorDetails = null
) => {
  return res.status(409).json({
    status_code: 409,
    success: false,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

const internalErrorResponse = (
  res,
  message,
  data = null,
  errorDetails = null
) => {
  return res.status(500).json({
    status_code: 500,
    success: false,
    message: message,
    data: data,
    errorDetails: errorDetails,
  });
};

export {
  sendSuccessResponse,
  sendSuccessResponseWithData,
  unauthorizeResponse,
  forribdenResponse,
  notFoundResponse,
  internalErrorResponse,
  sendErrorResponse,
  alreadyExistsResponse,
};
