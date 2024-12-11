import { check } from "express-validator";

export const validatePostAlbum = () => {
    return [
        check("name").notEmpty().withMessage("Song name cannot be empty"),
        check("desc").notEmpty().withMessage("Song desc cannot be empty"),
        check("album").notEmpty().withMessage("Song album cannot be empty"),
        check("image").isEmpty().withMessage("Song image cannot be empty"),
        check("backgroundColor")
            .isEmpty()
            .withMessage("Song background color cannot be empty"),
    ];
};