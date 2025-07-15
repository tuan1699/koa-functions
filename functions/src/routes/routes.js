import Router from "koa-router";
import {hello} from "../handlers/controllers/helloWorldController.js";

// Prefix all routes with /books
const router = new Router({
  prefix: "/api",
});

// Routes will go here
router.get("/helloWorld", hello);

export default router;
