import express from "express";

const router = express.Router();

router.get("/:name", async (req, res) => {
  try {
    const solarRes = await fetch(
      `https://api.le-systeme-solaire.net/rest/bodies/${req.params.name}`,
      { headers: { Authorization: `Bearer ${process.env.SS_KEY}` } }
    );
    if (!solarRes.ok) {
      return res.status(solarRes.status).json({ message: "Planet not found" });
    }
    const data = await solarRes.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;