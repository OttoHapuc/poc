import { Router } from "express";
import { validateBody } from "../middlewares/schema.validation.middleware.js";
import storiesControllers from "../controllers/stories.controllers.js";
import schema from "../schemas/stories.schemas.js";

const historyRoutes = Router();

historyRoutes
    .get('/', storiesControllers.listStories)
    .post('/', validateBody(schema.historySchema), storiesControllers.createStory)
    .patch('/:id', storiesControllers.updateStory)
    .delete('/:id', storiesControllers.deleteStory);

export default historyRoutes;