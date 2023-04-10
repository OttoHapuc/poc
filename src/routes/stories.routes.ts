import { Router } from "express";
import { validate } from "../middlewares/schema.validation.middleware.js";
import storiesControllers from "../controllers/stories.controllers.js";
import schema from "../schemas/stories.schemas.js";

const historyRoutes = Router();

historyRoutes.get('/', storiesControllers.listStories);
historyRoutes.post('/', /*validate(schema.historySchema, 'body'), */storiesControllers.createStory);
historyRoutes.patch('/:id', storiesControllers.updateStory);
historyRoutes.delete('/:id', storiesControllers.deleteStory);

export default historyRoutes;