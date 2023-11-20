import data from './accounts.json' assert { type: 'json' };
import Database from 'better-sqlite3';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

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

export async function getAllQuestions(req, res) {
  try {
    const stmnt = db.prepare("SELECT * FROM questionnaireQuestions");
    const rows = stmnt.all();
    const jsonToSend = {
      "meta": {
        "name": "Questionnaire questions",
        "title": "All questions for the questionnaire",
        "date": getToday(),
        "originalUrl": `${req.originalUrl}`,
      },
      "data": []
    }
    for (let i = 0; i < rows.length; i++) {
      jsonToSend.data.push(`/questionnaire/questions/${rows[i].id}`)
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}

export async function getSingleQuestion(req, res) {
  try {
    const params = [req.params.id];
    const stmnt = db.prepare(`SELECT * FROM questionnaireQuestions where id = ?`);
    const row = stmnt.get(params);
    const jsonToSend = {
      "meta": {
        "name": "Questionnaire question",
        "title": "Specific question for the questionnaire",
        "date": getToday(),
        "originalUrl": `${req.originalUrl}`,
      },
      "data": row
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}

const db = new Database(process.env.DB_PATH, { verbose: console.log });

export function getInitialTracks(limit = 50) {
  const sql = `
  select t.TrackId as trackId
  , t.Name as trackName
  , a.AlbumId as albumId
  , a.Title as albumTitle
  , at.ArtistId as artistId
  , at.Name as artistName
  , g.Name as genre
from tracks t
join albums a
 on t.AlbumId = a.AlbumId
join artists at
 on a.ArtistId = at.ArtistId
join genres g
 on t.GenreId = g.GenreId
limit $limit  
  `;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all({ limit });
  return rows;
}

export function getAllTracks(req, res) {
  try {
    const stmnt = db.prepare("SELECT * FROM tracks");
    const rows = stmnt.all();
    const jsonToSend = {
      "meta": {
        "name": "Questionnaire questions",
        "title": "All questions for the questionnaire",
        "date": getToday(),
        "originalUrl": `${req.originalUrl}`,
      },
      "data": []
    }
    for (let i = 0; i < rows.length; i++) {
      jsonToSend.data.push(`/questionnaire/questions/${rows[i].TrackId}`)
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}

export function getSpecificTrack(req, res) {
  try {
    const params = [req.params.id];
    const stmnt = db.prepare(`SELECT * FROM tracks where TrackId = ?`);
    const row = stmnt.get(params);
    const jsonToSend = {
      "meta": {
        "name": "Questionnaire question",
        "title": "Specific question for the questionnaire",
        "date": getToday(),
        "originalUrl": `${req.originalUrl}`,
      },
      "data": row
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}