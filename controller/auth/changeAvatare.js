const path = require("path");
const fs = require("fs/promises")
const Jimp = require('jimp');
const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../",  "public", "avatars")

// const { RequestError } = require("../../helpers");

const changeAvatars = async (req, res) => {
    const { path: tmpDir } = req.file;
    const { _id } = req.user;
    const resultUpload = path.join(avatarsDir, `${_id}.jpeg`);
    await fs.rename(tmpDir, resultUpload)
    const image = await Jimp.read(resultUpload);
    await image.resize(250,250);
    await image.writeAsync(resultUpload);

    const originalDir = path.join("avatars", `${_id}.jpeg`)
    await User.findByIdAndUpdate(_id, {avatarURL: originalDir})
    res.json({
        avatarURL: originalDir,
    })
  };
  
  module.exports = changeAvatars;