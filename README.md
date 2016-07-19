# sendbird-nodejs
Thin wrapper around SendBird Server REST API


## Installation
`npm install sendbird-nodejs --save`


## Usage
See [SendBird Documentation](https://docs.sendbird.com/platform) for payload and response details.
You don't need to pass the `auth` field on the payload, you provide it when creating a new instance of `SendBird` and it is attached to all requests.

```javascript
var SendBird = require('sendbird-nodejs');
var sb = new SendBird(config.sendBird.appToken);

sb.user.create({...payload})
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
 
