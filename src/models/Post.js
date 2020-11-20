import Author from "./Author";

export default class Post {
    constructor(avatar, firstname, lastname, createtime, media, mediaUrl, text, likes) {
        this.author = new Author(avatar, firstname, lastname)
        this.createtime = createtime;
        this.media = media;
        this.mediaUrl = mediaUrl;
        this.text = text;
        this.likes = likes;
    }
}