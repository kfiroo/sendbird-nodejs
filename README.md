# sendbird-nodejs
Thin wrapper around SendBird Server REST API

# PLEASE NOTE THIS WORKS ON TOP OF `SENDBIRD V2.0` API - V3.0 WILL COME SOON

## Installation
`npm install sendbird-nodejs --save`


## Usage
See [SendBird Documentation](https://docs.sendbird.com/v2/platform) for payload and response details.  
You don't need to pass the `auth` field on the payload, you provide it when creating a new instance of `SendBird` and it is attached to all requests. 

```javascript
var SendBird = require('sendbird-nodejs');
var sb = new SendBird(config.sendBird.appToken);
```

The `sb` instance we just created has a field for each endpoint in the [SendBird Server API](https://docs.sendbird.com/v2/platform#overview) that is an object with the endpoints methods.  
[sb.user](https://docs.sendbird.com/v2/platform#user)  
[sb.channel](https://docs.sendbird.com/v2/platform#open_chat)  
[sb.messaging](https://docs.sendbird.com/v2/platform#messaging)  
[sb.admin](https://docs.sendbird.com/v2/platform#admin)  
[sb.migration](https://docs.sendbird.com/v2/platform#migration)  

So, to create a user you would simply need to have something like this:  
```javascript
var payload = {
    "id": string,                 // User ID
    "nickname": string,           // User nickname
    "image_url": string,          // User profile image URL
    "issue_access_token": boolean // Default is false. Use only if you want to create an access token for this user
};
sb.user.create(payload)
    .then(function (response) {
        // do something with SendBird response    
    });
```


## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
 
