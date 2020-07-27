# Didux.io Notification Agent

To run this application you need to have npm installed.

# Creating RS256 keypair for the JWT

Create a 'jwt-keys' folder in the root directory of this project.
```mkdir jwt-keys```

Execute command for RS256 keypair generation. <br/>
```ssh-keygen -t rsa -b 4096 -m PEM -f ./jwt-keys/private.key```

(Don't add passphrase) <br/>
```openssl rsa -in ./jwt-keys/private.key -pubout -outform PEM -out ./jwt-keys/public.pem```

# Running the application

To run the application make sure to run tsc first. For development you can use an npm command to start a watcher that watches the file changes and creates a new build folder. For example start two terminals and use this command for a watcher:

```npm run watch```

And another terminal window to run the application:

```npm run start```