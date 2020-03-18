# Telegram - Free Mobile 

This library has been developed for specific needs.
It sends the message in duplicate, using Telegram but also the Free Mobile API.

## Configuration

Install the library
```
npm install --save telegram-free-mobile
```

Duplicate and edit the `config.json` file.

## Usage

### Send message

This code sends the message by Telegram but also using the Free API.
```typescript
Configuration.load("/path-to/config.json");
Communication.sendMessage("title", "content");
```

### Send picture

This code sends the picture by Telegram and a link into the Free message.
``` typescript
Configuration.load("/path-to/config.json");
Communication.sendMessageWithPicture("title", "content", "/home/user/image.png");
``` 

### Listen for Telegram messages

```typescript
new Server(((bot, message) => {
    console.log("Message received !")    
}));
```

`bot` is an instance of `TelegramBot` from [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) library.