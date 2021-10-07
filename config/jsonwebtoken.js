'use strict';

require('dotenv').config();

module.exports = {
  "development": {
    "tokenLife": process.env.TOKEN_LIFE || '1d',
    "tokenSecret": process.env.TOKEN_SECRET || "dev-secret-token",
    "tokenLinkLife": process.env.TOKEN_LINK_LIFE || '1d',
    "tokenLinkSecret": process.env.TOKEN_LINK_SECRET || "dev-link-secret-token",
    "refreshTokenLife": process.env.REFRESH_TOKEN_LIFE || '7d',
    "refreshTokenSecret": process.env.REFRESH_TOKEN_SECRET|| "dev-refresh-secret-token"
  },
  "test": {
    "tokenLife": process.env.TOKEN_LIFE || '1d',
    "tokenSecret": process.env.TOKEN_SECRET || "test-secret-token",
    "tokenLinkLife": process.env.TOKEN_LINK_LIFE || '1d',
    "tokenLinkSecret": process.env.TOKEN_LINK_SECRET || "test-link-secret-token",
    "refreshTokenLife": process.env.REFRESH_TOKEN_LIFE || '7d',
    "refreshTokenSecret": process.env.REFRESH_TOKEN_SECRET|| "test-refresh-secret-token"
  },
  "production": {
    "tokenLife": process.env.TOKEN_LIFE || '1d',
    "tokenSecret": process.env.TOKEN_SECRET || "prod-secret-token",
    "tokenLinkLife": process.env.TOKEN_LINK_LIFE || '1d',
    "tokenLinkSecret": process.env.TOKEN_LINK_SECRET || "prod-link-secr-et-token",
    "refreshTokenLife": process.env.REFRESH_TOKEN_LIFE || '7d',
    "refreshTokenSecret": process.env.REFRESH_TOKEN_SECRET|| "prod-refresh-secret-token"
  }
}
