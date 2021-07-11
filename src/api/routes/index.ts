import express from "express";
const router = express.Router();

/**
 * GET hello world.
 */
router.get("/", async function (req, res, next) {
	res.json({ message: "Hello World!" });
});

export default router;
