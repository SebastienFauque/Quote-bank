const db = require('./model.js');
const quotesArray = require('./../allquotes.js');

const controller = {};

// ? DONE
controller.getQuotes = async (req, res, next) => {
  const query = `SELECT * FROM quotes;`;

  try {
    const result = await db.query(query);
    console.log(`result.rows in getQuotes 🚀 🚀 🚀 🚀 🚀`, result.rows);
    res.locals.allQuotes = result.rows;
    // res.render('index.ejs', { quotes: result.rows }); // Where should this go?
    return next();
  } catch (error) {
    return next({
      log: `Error in getQuotes middleware: ${error}`,
      status: 500,
      message: { error: 'Error in getQuotes, didnt get all quotes.' }
    });
  }
};

// ? DONE -FIXED
controller.getIndex = async (req, res, next) => {
  // const query = `SELECT COUNT(*) FROM quotes;`;
  const query = `SELECT MAX(_id) FROM quotes;`;
  // console.log(`hit controller.getIndex`);
  try {
    const result = await db.query(query);
    // console.log( `index result:`, result.rows);
    res.locals.index = Number(result.rows[0].max) + 1;
    return next();
  } catch (error) {
    console.log('it errored in getIndex', error);
    return next({
      log: `Error in getIndex middleware: ${error}`,
      status: 500,
      message: { error: 'Error in getIndex, didnt get a index.' }
    })
  }
}

// DONE
controller.postQuote = async (req, res, next) => {
  const query = `INSERT INTO quotes (
    _id,
    name,
    quote
  )
  VALUES ($1, $2, $3);
  `;

  try {
      const info = [res.locals.index, req.body.name, req.body.quote]; //! put req info here as string with single quotes
      const result = await db.query(query, info);
      // res.redirect('/');
      return next();
  } catch (error) {
    return next({
      log: `Error in postQuote middleware: ${error}`,
      status: 500,
      message: { error: 'Error in postQuote, didnt post a quote.' }
    })
  }
}


// ? BUG
controller.updateQuote = async (req, res, next) => {
  const query =
  `UPDATE quotes
  SET name = $1, quote = $2
  WHERE _id = $3;`;

  try {
    // Get the info
    const info = [req.body.alter_name, req.body.alter_quote, req.body.alter_id]; //! PUT THIS IN THE RIGHT ORDER AS SHOWN IN QUERY as string with single quotes
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


// ? BUG
controller.deleteQuote = async (req, res, next) => {
  console.log(`IN DELETEQUOTE? 🚀 🚀 🚀 🚀 🚀 `);
  console.log(`delete_id req body`, req.body.delete_id);
  const query = `DELETE FROM quotes WHERE _id=$1; `;
  console.log("🚀 ~ file: controller.js ~ line 98 ~ controller.deleteQuote ~ req.body.delete_id", req.body.delete_id)
  try {
    // Get id from req body
    console.log("🚀 ~ file: controller.js ~ line 98 ~ controller.deleteQuote ~ req.body.delete_id", req.body.delete_id)
    const info = [req.body.delete_id]; //! must be string in single quotes
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