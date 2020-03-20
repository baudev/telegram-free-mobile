# Telegram - Free Mobile 

This library has been developed for specific needs.
It combines communication with Telegram and the free mobile API.
## Configuration

+ Install the library
```
npm install --save telegram-free
```

+ Define the configuration variables

1. Using a json file (example in [`config.json`](config.json))

```typescript
let communicationApi = new TelegramFreeMobile("/home/user/config.json");
```

2. Using an object

```typescript
let config = {
    free_mobile: [
        {
            user: 123,
            password: "xxxxx"
        }
    ],
    telegram: {
        group_id: 123456,
        bot_token: "xxxxxxxxxx"
    }
};

let communicationApi = new TelegramFreeMobile(config);
```

## Usage

### Free Mobile

**Send a message**

```typescript
let free = communicationApi.freeMobile;
free.sendMessage("Hello World!")
    .then(()=> {
        console.log("Sent to all specified users!");
    })
    .catch((err: Error | null) => {
        console.log("Error...", err);
    });
```

### Telegram

**Send a message**

```typescript
let telegram = communicationApi.telegram;
telegram.sendMessage("Hello World!")
.then((message) => {
    console.log("Message sent!");
});
```

**Send a message with a picture**

```typescript
let telegram = communicationApi.telegram;
telegram.sendMessageWithPicture("Hello World!", "/home/user/image.png")
.then((message) => {
    console.log("Photo sent!");
});
```

**Launch Telegram Bot and set OnMessageListener**

```typescript
let telegram = communicationApi.telegram;
telegram.launchTelegramServer()
    .setOnMessageReceived((message) => {
        console.log("Message received:", message);
    });
```

## API

### Class TelegramFreeMobile

**TelegramFreeMobile([config])**

+ config - (_`ConfigurationInterface` or string_) The configuration variables. If `config` is a string, then it should be the absolute path of the json configuration file (example in [`config.json`](config.json)). If `config` is an object, it should implements [`ConfigurationInterface`](src/Interfaces/ConfigurationInterface.ts). **Default:** `config.json` of this current directory. 

**telegram(): Telegram**

Returns an instance of `Telegram`.

**freeMobile(): FreeMobile**

Returns an instance of `FreeMobile`.

**configuration(): Configuration**

Returns an instance of `Configuration`.

### Class Telegram

**sendMessage(content): Promise<TelegramBot.Message>**

+ content - (_string_) Message to be sent.

**sendMessageWithPicture(content, picture): Promise<TelegramBot.Message>**

+ content - (_string_) Message to be sent.
+ picture - (_string_) Absolute path or public URL of the picture to be sent.

**launchTelegramServer(): Telegram**

Launches the telegram bot server. Required to use listeners.

**setOnMessageListener(onMessageReceived): void**

+ onMessageReceived - (_(message: TelegramBot.Message) => void_) Callback called each time a message is received.

**bot: TelegramBot**

Returns an instance of `TelegramBot` from [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) library.

### Class FreeMobile

**sendMessage(content): Promise<void[]>**

+ content - (_string_) Message to be sent.

### Interface ConfigurationInterface

+ telegram - (_TelegramConfigurationInterface_) Telegram group configuration. The bot will listen for messages into the group specified.
+ free_mobile - (_Array\<FreeMobileConfigurationInterface>_) Free mobile configuration. The `FreeMobile` class will send messages to all specified users.

### Interface TelegramConfigurationInterface

+ bot_token - (_string_) Token of the telegram bot. 
+ group_id - (_number_) Group ID. The bot will listen for messages into the group specified.

### Interface FreeMobileConfigurationInterface

+ user - (_number_) Account number of the free mobile user.
+ password - (_string_) Token of the free mobile user.
