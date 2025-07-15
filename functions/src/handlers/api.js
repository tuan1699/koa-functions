import Koa from "koa";
import {koaBody} from "koa-body";
import routers from "../routes/routes.js";

const app = new Koa();

app.use(koaBody());
app.use(routers.routes());
app.use(routers.allowedMethods());

// app.listen(PORT, async () => {
//     console.info(`🤗 Server is running at PORT:`,PORT )
// });
export default app;
