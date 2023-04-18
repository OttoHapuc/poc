import { Request, Response, NextFunction } from 'express';
import storiresService from '../services/stories.services.js';
import { historyType } from '../protocols';

async function listStories(req: Request, res: Response, next: NextFunction) {
    try {
        const list = await storiresService.listStories();
        return res.send(list);
    } catch (error) {
        next(error);
    }
}

async function createStory(req: Request, res: Response, next: NextFunction) {
    const { author, history } = req.body as historyType;
    try {
        await storiresService.createStory({ author, history });
        return res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}

async function updateStory(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { history } = req.body;
    try {
        const result = await storiresService.updateStory(parseInt(id), history);
        return res.send(result);
    } catch (error) {
        next(error);
    }
}

async function deleteStory(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        await storiresService.deleteStory(parseInt(id));
        return res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}

export default {
    listStories,
    createStory,
    updateStory,
    deleteStory,
};