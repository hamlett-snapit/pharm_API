app.post('/users', [
    UsersController.insert
 ]);

 app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next();
    // pass control to the next handler
  });