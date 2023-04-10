import errors from '../errors/http.errors.js'
import { historyType } from '../protocols.js';
import storiesRepositories from '../repositories/stories.repositories.js';
import { QueryResult, QueryResultRow } from 'pg';

interface QueryResultRowWithCount extends QueryResultRow {
  rowsCount?: number;
}

interface QueryResultWithCount<T = any> extends QueryResult<QueryResultRowWithCount & T> {
  rowsCount?: number;
}
async function listStories() : Promise<any[]> {
    const {rows} = await storiesRepositories.listStories()
    return rows
}
async function createStory({ author, history }:historyType) : Promise<void>{
    await storiesRepositories.createStory({ author, history });
}
async function updateStory(id: number){
    const {rowsCount, rows: [existId]} : QueryResultWithCount = await storiesRepositories.findById(id);
    if(!rowsCount) throw errors.notFoundError;
    await storiesRepositories.updateStory(id);
}
async function deleteStory(id: number){
    const {rowsCount, rows: [existId]} : QueryResultRowWithCount = await storiesRepositories.findById(id);
    if(!rowsCount) throw errors.notFoundError();
    await storiesRepositories.deleteStory(id);
}

export default {
    listStories,
    createStory,
    updateStory,
    deleteStory,
}