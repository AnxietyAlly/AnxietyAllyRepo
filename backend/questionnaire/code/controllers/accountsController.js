import data from './accounts.json' assert { type: 'json' };
import { 
  getInitialTracks,
  getAllTracks
} from '../lib/server/db/index.js'
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

export async function getQuestions(req, res) {
  try {
    //set header before response
    getAllTracks();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
}
