'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here
    const url = request.url;

    if (url === "/state") {
      response.writeHead(
        200,
        { 'Content-Type': 'application/json' }
      );
      response.write(JSON.stringify({ state }));
    }
    else if (url === "/add") {
      response.writeHead(
        200,
        { 'Content-Type': 'application/json' }
      );
      state++;
      response.write(JSON.stringify({ state }));
    }
    else if (url === "/subtract") {
      response.writeHead(
        200,
        { 'Content-Type': 'application/json' }
      );
      state--;
      response.write(JSON.stringify({ state }));
    }
    else if (url === "/reset") {
      response.writeHead(
        200,
        { 'Content-Type': 'application/json' }
      );
      state = 10;
      response.write(JSON.stringify({ state }));
    }
    else {
      response.writeHead(
        404,
        { 'Content-Type': 'application/json' }
      );
      const stateResponse = {
        "error": "Not found"
      }
      response.write(JSON.stringify(stateResponse));
    }
    response.end()
  });
  return server;
}

module.exports = {
  createServer
};
