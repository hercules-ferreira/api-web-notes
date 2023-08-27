const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();

function MyMiddleware(request, response, next) {
  next();
}

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", MyMiddleware, notesController.create);

notesRoutes.get("/:id", MyMiddleware, notesController.show);

notesRoutes.delete("/:id", MyMiddleware, notesController.delete);

notesRoutes.get("/", MyMiddleware, notesController.index);

module.exports = notesRoutes;
