import { request, response, Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };

/*
app.get("/", (request, response ) => {
    //return response.send("Ola NLW 05")
    return response.json({
        message: "Ola NLW 05"
    })
});

app.post("/", (request, response ) => {
    return response.json({
        message: "Usuario salvo com sucesso!"
    })
});
*/


/**
 * Tipos de paramentos
 *
 * Routes Params => Paramentros de rotas
 * http://localhost:3333/settings/1
 *
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumascoisas
 *
 * Body params =>  {
 *  Passa jsons
 * }
 */
