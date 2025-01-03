import { v2 as cloudinary } from "cloudinary"
import albumModel from '../models/albumModel.js'
import { validationResult } from "express-validator";

const addAlbum = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.File;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });

        const albumData = {
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }


        const album = albumModel(albumData);
        await album.save();

        res.json({ success: true, message: 'song added' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

const listAlbum = async (req, res) => {
    try {
        const allAlbums = await albumModel.find({});
        res.json({ success: true, message: allAlbums });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

const removeAlbum = async (req, res) => {
    try {
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'Album removed' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export { addAlbum, listAlbum, removeAlbum }