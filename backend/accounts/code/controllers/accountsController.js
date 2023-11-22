import Database from 'better-sqlite3';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const db = new Database(process.env.DB_PATH, { verbose: console.log });

function getToday() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  console.log(currentDate); // "17-6-2022"
  return currentDate;
}

const tempResponse = {
  meta: {
    date: getToday(),
  },
  data: {
    message: 'this route is not implemented yet',
  },
};

export async function getAllAccounts(req, res) {
  try {
    const stmnt = db.prepare("SELECT * FROM accounts");
    const rows = stmnt.all();
    const jsonToSend = {
      meta: {
        name: "Accounts",
        title: "All accounts",
        date: getToday(),
        originalUrl: `${req.originalUrl}`,
      },
      data: []
    }
    for (let i = 0; i < rows.length; i++) {
      jsonToSend.data.push(`/accounts/${rows[i].id}`)
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}

export async function getSingleAccount(req, res) {
  try {
    const params = [req.params.id];
    const stmnt = db.prepare(`SELECT * FROM accounts where id = ?`);
    const row = stmnt.get(params);
    const jsonToSend = {
      meta: {
        name: "Single account",
        title: "Specific account",
        date: getToday(),
        originalUrl: `${req.originalUrl}`,
      },
      data: row
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}

export async function setAccounts(req, res) {
  let body = req.body;
  let url = req.url;
  var url_parts = url.replace(/\/\s*$/, '').split('/');
  url_parts.shift();
  if (req.body.starttime && req.body.id && req.body.name) {
    res
      .status(200)
      .send(
        `Hi ${req.body.name}! I made an accounts for: ${url_parts[3]}-${url_parts[2]} at ${req.body.starttime}!`
      );
  } else {
    res
      .status(200)
      .send('Hi love. I cannot make any accounts because something is missing');
  }
}
