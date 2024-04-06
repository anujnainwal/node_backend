import jwt from "jsonwebtoken";
import crypto from "crypto";

const generateAccessToken = (payloadInfo) => {
  return jwt.sign(payloadInfo, process.env.ACCESS_TOKEN_SECRECT, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
  });
};

const generateRefreshToken = (payloadInfo) => {
  return crypto.randomUUID();
};

export { generateAccessToken, generateRefreshToken };
