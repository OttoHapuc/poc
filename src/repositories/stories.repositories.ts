import db from '../config/db.js';
import { QueryResult } from 'pg';
import { historyType } from '../protocols.js';

async function listStories(): Promise<QueryResult> {
  return await db.query(
    `
        SELECT * FROM stories
    `);
}

async function createStory({ author, history }: historyType): Promise<QueryResult> {
  return await db.query(
    `
      INSERT INTO stories (author, history)
      VALUES ($1, $2)
    `,
    [author, history]
  );
}

async function updateStory(id: number): Promise<QueryResult> {
  return await db.query(
    `
      UPDATE stories SET stories  WHERE id = $1
    `,
    [id]
  );
}

async function deleteStory(id: number): Promise<QueryResult> {
  return await db.query(
    `
      DELETE FROM stories WHERE id = $1
    `,
    [id]
  );
}

async function findById(id: number): Promise<QueryResult> {
  return await db.query(
    `
      SELECT * FROM stories WHERE id = $1
    `,
    [id]
  );
}

export default {
  listStories,
  createStory,
  updateStory,
  deleteStory,
  findById,
};