'use strict';

const {resolve, join} = require('path');

const requestsIdsIndexes = {};

const resolvePath = path => join(path[0] === '~' ? join(process.env.HOME, path.slice(1)) : resolve(path));
const resolveRequestPath = (req, path) => {
  requestsIdsIndexes[req.id] = 0;
  const requestPath = join(resolvePath(path), req.path, req.id, requestsIdsIndexes[req.id].toString());
  return requestPath;
};

module.exports = {requestsIdsIndexes, resolvePath, resolveRequestPath};
