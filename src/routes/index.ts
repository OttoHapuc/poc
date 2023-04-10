import { Router } from "express";
import historyRoutes from "./stories.routes.js";

const routes = Router();

routes.use('/stories', historyRoutes);

export default routes;