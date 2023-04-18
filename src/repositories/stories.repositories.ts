import prisma from '../config/db.js';
import { QueryResult } from 'pg';
import { historyType } from '../protocols.js';

async function listStories() {
  return await prisma.stories.findMany();
}

async function createStory({ author, history }) {
  return await prisma.stories.create({
    data: {history, author}
  })
}

async function updateStory(id, history) {
  return await prisma.stories.update({
    where: {id},
    data: {history}
  })
}

async function deleteStory(id) {
  return await prisma.stories.delete({where:{id}});
}

async function findById(id) {
  return await prisma.stories.findFirst({where:{id}});
}

export default {
  listStories,
  createStory,
  updateStory,
  deleteStory,
  findById,
};