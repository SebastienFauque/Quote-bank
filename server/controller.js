const db = require('./model.js');

const controller = {};

controller.getQuotes = async (req, res, next) => {
  const query = `SELECT * FROM quotes;`;

  try {
    const result = await db.query(query);
    res.locals.allQuotes = result.rows;
    return next();
  } catch (error) {
    return next({
      log: `Error in getQuotes middleware: ${error}`,
      status: 500,
      message: { error: 'Error in getQuotes, didnt get all quotes.' }
    });
  }
};

controller.postQuote = async (req, res, next) => {
  const query = `INSERT INTO quotes (
    _id,
    name,
    quote
  )
  VALUES ($1, $2, $3);
  `;

  try {
      // Get length of quotes table
      // Add the length of the quotes table to the '_id' AS $1
      // Add the name as $2
      // Add the quote as $3
      const info = []; //! put req info here as string with single quotes
      const result = await db.query(query, info);
      return next();
  } catch (error) {
    return next({
      log: `Error in postQuote middleware: ${error}`,
      status: 500,
      message: { error: 'Error in postQuote, didnt post a quote.' }
    })
  }
}

controller.updateQuote = async (req, res, next) => {
  const query =
  `UPDATE quotes
  SET name = $1, quote = $2
  WHERE _id = $3;`;

  try {
    // Get the info
    const info = []; //! PUT THIS IN THE RIGHT ORDER AS SHOWN IN QUERY as string with single quotes
    // Run the query
    const result = await db.query(query, info);
  } catch(error) {
    return next({
      log: `Error in updateQuote middleware: ${error}`,
      status: 500,
      message: { error: 'Error in updateQuote, didnt update a quote.' }
    });
  }
};

controller.deleteQuote = async (req, res, next) => {
  const query = `DELETE FROM quotes WHERE _id=$1; `;

  try {
    // Get id from req body
    const info = []; //! must be string in single quotes
    const result = await db.query(query, info);
  } catch(error) {
    return next({
      log: `Error in deleteQuote middleware: ${error}`,
      status: 500,
      message: { error: 'Error in deleteQuote, didnt delete a quote.' }
    });
  }
};

// Stretch goals, make people guess who the quote is from. If no one can guess, the quote will be deleted.
// Post more quotes to the db
// Add film info to the db

module.exports = controller;