import { Router } from "express";
import { Comment } from "../../models";
import withAuth from "../../utils/auth";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({});
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      where: { id: req.params.id },
    });
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    if (req.session) {
      const dbCommentData = await Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
      res.json(dbCommentData);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const [updatedRowCount] = await Comment.update(
      { comment_text: req.body.comment_text },
      { where: { id: req.params.id } }
    );
    if (updatedRowCount === 0) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    res.json({ message: "Comment updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedRowCount = await Comment.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowCount === 0) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
