"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatService = exports.Message = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var Message = /** @class */ (function () {
    function Message(author, content) {
        this.author = author;
        this.content = content;
    }
    return Message;
}());
exports.Message = Message;
var ChatService = /** @class */ (function () {
    function ChatService() {
        this.conversation = new rxjs_1.Subject();
        this.messageMap = {
            "hi": "Chào, hỏi em khỏe không đi",
            "Hi": "Chào, hỏi em khỏe không đi",
            "khỏe hong": "Khỏe",
            "khỏe không": "Khỏe",
            "Khỏe hong": "Khỏe",
            "Khỏe không": "Khỏe",
            "oki": "bye",
            "oke": "bye",
            "default": "Bái bai . Bửa sau nch típ"
        };
    }
    ChatService.prototype.getBotAnswer = function (msg) {
        var _this = this;
        var userMessage = new Message('user', msg);
        this.conversation.next([userMessage]);
        var botMessage = new Message('bot', this.getBotMessage(msg));
        setTimeout(function () {
            _this.conversation.next([botMessage]);
        }, 1000);
    };
    ChatService.prototype.getBotMessage = function (question) {
        var answer = this.messageMap[question];
        return answer || this.messageMap['default'];
    };
    ChatService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
