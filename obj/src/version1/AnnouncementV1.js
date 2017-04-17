"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TipV1 {
    constructor(id, category, app, creator, title, content) {
        this.id = id;
        this.category = category;
        this.app = app;
        this.creator = creator;
        this.title = title;
        this.content = content;
        this.pic_ids = [];
        this.docs = [];
        this.create_time = new Date();
    }
}
exports.TipV1 = TipV1;
//# sourceMappingURL=AnnouncementV1.js.map