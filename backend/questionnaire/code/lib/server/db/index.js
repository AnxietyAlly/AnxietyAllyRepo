import Database from 'better-sqlite3';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

console.log(process.env.DB_PATH);

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

export function getAllTracks() {
  console.log(process.env.DB_PATH);
  const stmnt = db.prepare("SELECT * FROM tracks");
  const rows = stmnt.all();
  console.log(rows);
}