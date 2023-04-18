import errors from '../errors/http.errors.js'
import { historyType } from '../protocols.js';
import storiesRepositories from '../repositories/stories.repositories.js';
import { QueryResult, QueryResultRow } from 'pg';

async function listStories() {
    const rows = await storiesRepositories.listStories()
    return rows
}
async function createStory({ author, history }) {
    await storiesRepositories.createStory({ author, history });
}
async function updateStory(id, history){
    const rows = await storiesRepositories.findById(id);
    if(!rows) throw errors.notFoundError;
    await storiesRepositories.updateStory(id, history);
}
async function deleteStory(id){
    const rows = await storiesRepositories.findById(id);
    if(!rows) throw errors.notFoundError();
    await storiesRepositories.deleteStory(id);
}

export default {
    listStories,
    createStory,
    updateStory,
    deleteStory,
}