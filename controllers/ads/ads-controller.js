const sequelize = require("../../modules/postgres");

module.exports = class Ads {
    static async getSite(req, res) {
        try {
            const ads = await req.db.ads.findAll({ attributes: ["id", "img_web", "link"] })

            res.status(200).json({
                ok: true,
                ads,
            });
        } catch (e) {
            res.status(400).json({
                ok: false,
                message: e.toString().replace("Error:", "").trim(),
            });
        }
    }

    static async getApp(req, res) {
        try {
            const ads = await req.db.ads.findAll({ attributes: ["id", "img_mob", "link"] })

            res.status(200).json({
                ok: true,
                ads,
            });
        } catch (e) {
            res.status(400).json({
                ok: false,
                message: e.toString().replace("Error:", "").trim(),
            });
        }
    }

    static async getMinSite(req, res) {
        try {
            const ads = await req.db.min_ads.findAll({ attributes: ["id", "img_web", "link"] })

            res.status(200).json({
                ok: true,
                ads: ads[0],
            });
        } catch (e) {
            res.status(400).json({
                ok: false,
                message: e.toString().replace("Error:", "").trim(),
            });
        }
    }

    static async getMinApp(req, res) {
        try {
            const ads = await req.db.min_ads.findAll({ attributes: ["id", "img_mob", "link"] })

            res.status(200).json({
                ok: true,
                ads: ads[0],
            });
        } catch (e) {
            res.status(400).json({
                ok: false,
                message: e.toString().replace("Error:", "").trim(),
            });
        }
    }
}