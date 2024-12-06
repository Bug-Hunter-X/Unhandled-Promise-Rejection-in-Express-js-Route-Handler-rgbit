# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications where an unhandled promise rejection within a route handler leads to a 500 Internal Server Error without providing informative error details to the client.

## Bug Description

The provided `bug.js` file contains an Express.js application with a route handler that performs an asynchronous operation.  If the asynchronous operation throws an error, the error is caught but not properly sent as a response to the client.  This results in a generic server error, making debugging difficult.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle errors in asynchronous operations within an Express.js route handler.  The solution includes proper error handling that sends informative error messages back to the client.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.  
4. Make a request to `http://localhost:3000`. Observe the error in console and lack of response.
5. Run `node bugSolution.js`. Make another request.  Observe the detailed error response.