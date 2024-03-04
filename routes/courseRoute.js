import express from "express";
import { create, deletecourse, getAll, getOne, update } from "../controller/courseController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deletecourse);

export default route;