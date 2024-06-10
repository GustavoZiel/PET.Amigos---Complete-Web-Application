import express from "express";
import petController from "../controllers/pet.controller.js";
import usuarioController from "../controllers/usuario.controller.js";
import ongController from "../controllers/ong.controller.js";
import upload from '../upload/upload_img.js';

const router = express.Router();

// Redirect to homepage once connected
router.get('/', function (req, res) {
    res.redirect('/home_page.html');
});

// CRUD - Pets
router.post("/pets", upload.uploadFile.array('photos', 5), petController.create); // Create
router.get("/pets", petController.findAll); // Retrieve
router.get("/pets/:id", petController.findById); // Retrieve
router.delete("/pets/:id", petController.deleteByPk); // Delete
router.put("/pets/:id", petController.update); // Update
router.get("/pets/search", petController.searchBy); // Search

// CRUD - Usuários
router.post("/users", usuarioController.create); // Create
router.get("/users", usuarioController.findAll); // Retrieve
router.get("/users/:id", usuarioController.findById); // Retrieve
router.delete("/users/:id", usuarioController.deleteById); // Delete
router.put("/users/:id", usuarioController.update); // Update

// CRUD - Ongs
router.post("/ongs", ongController.create); // Create
router.get("/ongs", ongController.findAll); // Retrieve
router.get("/ongs/:id", ongController.findById); // Retrieve
router.delete("/ongs/:id", ongController.deleteById); // Delete
router.put("/ongs/:id", ongController.update); // Update

export default router;