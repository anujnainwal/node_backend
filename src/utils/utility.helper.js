const sendSuccessResponse = (res, status, message, data = {}) => {
  return res.status(200).json({ status, message, data });
};

const sendSuccessResponseWithData = (res, status, message, data = {}) => {
  return res.status(201).json({ status, message, data });
};

const sendErrorResponse = (res, status, message, data = {}) => {
  return res.status(400).json({ status, message, data });
};

const unauthorizeResponse = (res, status, message, data = {}) => {
  return res.status(401).json({ status, message, data });
};

const forribdenResponse = (res, status, message, data = {}) => {
  return res.status(403).json({ status, message, data });
};

const notFoundResponse = (res, status, message, data = {}) => {
  return res.status(404).json({ status, message, data });
};

const internalErrorResponse = (res, status, message, data = {}) => {
  return res.status(500).json({ status, message, data });
};

export {
  sendSuccessResponse,
  sendSuccessResponseWithData,
  unauthorizeResponse,
  forribdenResponse,
  notFoundResponse,
  internalErrorResponse,
  sendErrorResponse,
};
