import { Router } from "express";
import { Post, User, Comment } from "../../models";

import withAuth from "../../utils/auth";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes: ["id", "title", "content", "created_at"],
      order: [["created_at", "DESC"]],
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: { model: User, attributes: ["username"] },
        },
      ],
    });

    res.json(dbPostData.reverse());
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: { id: req.params.id },
      attributes: ["id", "content", "title", "created_at"],
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: { model: User, attributes: ["username"] },
        },
      ],
    });

    if (!dbPostData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }

    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const [updatedRowCount] = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: { id: req.params.id },
      }
    );

    if (updatedRowCount === 0) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }

    res.json({ message: "Post updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedRowCount = await Post.destroy({
      where: { id: req.params.id },
    });

    if (deletedRowCount === 0) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }

    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
