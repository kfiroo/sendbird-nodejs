# sendbird-nodejs
Thin wrapper around SendBird's Platform API

## Installation
    npm install sendbird-nodejs --save

or

    yarn add sendbird-nodejs

## Usage
See [SendBird Documentation](https://docs.sendbird.com/platform) for payload and response details.  
You must provide your `API Token` when creating a new instance of `SendBird` and it will be attached to all requests. 

```javascript
var SendBird = require('sendbird-nodejs');
var sb = new SendBird(/* your sendbird api token here */);
```

The `sb` instance we just created has an entry for each endpoint in the [SendBird Platform API](https://docs.sendbird.com/platform), it is an object with the endpoints methods.  
Note that all methods return a `Promise` as returned by [request-promise](https://github.com/request/request-promise).


[sb.users](https://docs.sendbird.com/platform#user)  

[sb.openChannels](https://docs.sendbird.com/platform#open_channel)  
[sb.openChannels.messages](https://docs.sendbird.com/platform#messages)  
[sb.openChannels.metadata](https://docs.sendbird.com/platform#meta)  
[sb.openChannels.metacounter](https://docs.sendbird.com/platform#meta)  

[sb.groupChannels](https://docs.sendbird.com/platform#group_channel)  
[sb.groupChannels.messages](https://docs.sendbird.com/platform#messages)  
[sb.groupChannels.metadata](https://docs.sendbird.com/platform#meta)  
[sb.groupChannels.metacounter](https://docs.sendbird.com/platform#meta)  

##### Missing endpoints

[sb.applications](https://docs.sendbird.com/platform#application)  
[sb.migration](https://docs.sendbird.com/platform#migration)  
[sb.bots](https://docs.sendbird.com/platform#bot_interface)  

### Example

To create a user you would simply need to have something like this:  
```javascript
const SendBird = require('sendbird-nodejs');
const sb = SendBird('<SOME API TOKEN>');

const payload = {
    "user_id": string,
    "nickname": string,
    "profile_url": string,
    "issue_access_token": boolean // (Optional)
};
sb.users.create(payload)
    .then(function (response) {
        // do something with SendBird response
        // {
        //     "user_id": string,
        //     "nickname": string,
        //     "profile_url": string,
        //     "access_token": string,
        //     "last_seen_at": long,
        //     "is_online": boolean
        // }
    });
```

There are two different types of parameters the Platform API requires  

1. `url params` - you can see them in sendbird docs as `{some_param}` in the `URL`
2. `payload/querystring params` - you can see them in the sendbird docs under the `request` section

We will treat the two types differently when calling the API.  
`url params` will be used as arguments for the API method you are calling.  
`payload/querystring params` will always a plain object and the last argument of the API method.

This is how we would `send` a `message` to a `group channel` on behalf of some user using the API: [Send Message Docs](https://docs.sendbird.com/platform#messages_3_send)
```javascript
const SendBird = require('sendbird-nodejs');
const sb = SendBird('<SOME API TOKEN>');

const channelUrl = 'channel-url-from-sendbird';
const payload = {
    "message_type": "MESG",       // Text message
    "user_id": string,            // Sender user_id
    "message": string,            // Empty string is not allowed.
    "data": string,               // (Optional) Custom data 
    "custom_type": string,        // (Optional) default: ''  
    "mark_as_read": boolean       // (Optional) default: true  
};
sb.groupChannels.messages.send(channelUrl, payload)
    .then(function (response) {
        // do something with SendBird response
        // {
        //     "message_id": long,
        //     "type": "MESG",
        //     "message": string,
        //     "file": {
        //         "name": string,
        //         "url": string,
        //         "type": string,
        //         "size": int
        //     },
        //     "data": string,
        //     "channel_url": string,
        //     "created_at": long,
        //     "user": {
        //         "nickname": string,
        //         "user_id": string,
        //         "profile_url": string
        //     },
        //     "custom_type": string
        // }
    });
```
In the [docs](https://docs.sendbird.com/platform#messages_3_send) we see the `URL` is `https://api.sendbird.com/v3/{channel_type}/{channel_url}/messages` so the `channel_type` param will be set by using `sb.groupChannels` and the `channel_url` is the first argument we of `sb.groupChannels.message.send`


## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
 
