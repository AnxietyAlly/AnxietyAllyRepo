import data from './accounts.json' assert { type: 'json' };

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

export async function getAccounts(req, res) {
  try {
    //set header before response
    res.status(200).send(data);
  } catch (err) {
    next(err);
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
