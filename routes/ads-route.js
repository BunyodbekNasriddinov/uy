const express = require("express");
const router = express.Router();

const { getSite, getApp } = require("../controllers/ads/ads-controller")

router.get("/site", getSite);
router.get("/app", getApp);

module.exports = {
    path: "/ads",
    router,
}