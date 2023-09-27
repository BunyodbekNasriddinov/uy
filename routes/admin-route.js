const {
  loginGET,
  loginPOST,
  Dashboard,
  pendingAnnouncements,
  deletePending,
  confirmAnnouncement,
  getAllAnnouncements,
  deleteAnnouncement,
  getAllUsers,
  deleteUser,
  getUserPosts,
  recAnnouncement,
  getChat,
  getAds,
  postAds,
  deleteAds,
  getMinAds,
  postMinAds,
  deleteMinAds,
} = require("../controllers/admin/admin-controller");

const adminMiddleware = require("../middlewares/admin-middleware");
const uploadAdsMiddleware = require("../middlewares/uploads-ads-middleware");

const express = require("express");
const router = express.Router();

router.get("/login", loginGET);
router.post("/login", loginPOST);

router.use(adminMiddleware);

router.get("/", Dashboard);

router.get("/pending", pendingAnnouncements);
router.get("/pending/confirm/:announcement_id", confirmAnnouncement);
router.get("/announcements", getAllAnnouncements);
router.get("/announcements/delete/:announcement_id", deleteAnnouncement);
router.get("/pending/delete/:announcement_id", deletePending);
router.get("/announcements/rec/:announcement_id", recAnnouncement);

router.get("/users", getAllUsers);
router.get("/users/delete/:user_id", deleteUser);
router.get("/users/posts/:user_id", getUserPosts);

// router.get("/chat", getChat);

router.get("/ads", getAds);
router.post("/ads", uploadAdsMiddleware, postAds);
router.get("/ads/delete/:id", deleteAds);

router.get("/min-ads", getMinAds);
router.post("/min-ads", uploadAdsMiddleware, postMinAds);
router.get("/min-ads/delete", deleteMinAds);

router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/");
});

router.use("*", (req, res) => {
  res.render("404");
});

module.exports = {
  path: "/admin",
  router,
};
