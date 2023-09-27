const express = require("express");
const router = express.Router();

const { getSite, getApp, getMinSite, getMinApp } = require("../controllers/ads/ads-controller")

router.get("/site", getSite);
router.get("/app", getApp);

router.get("/min-site", getMinSite);
router.get("/min-app", getMinApp);

module.exports = {
    path: "/ads",
    router,
}