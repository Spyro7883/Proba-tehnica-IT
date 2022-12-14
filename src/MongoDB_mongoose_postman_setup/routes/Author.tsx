import express from "express";
import controller from "../controllers/Author"

const router =express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json())

router.post("/create",controller.createAuthor) ;
router.get("/get/:authorId",controller.readAuthor) ;
router.get("/get",controller.readAllAuthor) ;
router.patch("/update",controller.updateAuthor) ;
router.delete("/create",controller.deleteAuthor) ;

export = router;
