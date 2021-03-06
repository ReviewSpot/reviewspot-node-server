import { Router } from "express";
import {
    getAlbum,
    getAlbumReviews,
    getAverageRating,
    rateAlbum,
    searchForAnAlbum,
    getUserNewReleases,
} from "../controllers/albums-controller.js";
import { userMustBeLoggedIn } from "../middleware/authorization.js";
import { albumIdMustBeValid } from "../middleware/general-resources.js";
import { getNewReleases } from "../services/spotify/spotify-album-service.js";
const albumsRouter = Router();

albumsRouter.get("/newReleases", getUserNewReleases);
albumsRouter.get("/album/:albumId", albumIdMustBeValid, getAlbum);
albumsRouter.get(
    "/album/:albumId/reviews",
    albumIdMustBeValid,
    getAlbumReviews
);
albumsRouter.get("/search", searchForAnAlbum);
albumsRouter.get("/album/:albumId/avgRating", getAverageRating);
albumsRouter.post("/album/:albumId/rate", userMustBeLoggedIn, rateAlbum);

export default albumsRouter;
