const express = require("express");
const router = express.Router();
const requestsdbHelper = require("../db/queries/requestsdbHelper");

/**
 * Get requests from the database given their id.
 * @param {String} id The id of the customer.
 * @return {Promise<{}>} A promise that includes the requests data.
 */
module.exports = (db) => {
  router.get("/:id", (req, res) => {
    requestsdbHelper
      .getUserRequestsById(db, req.params.id)
      .then((result) => res.json(result))
      .catch((err) => console.log(err.message));
  });

  return router;
};
