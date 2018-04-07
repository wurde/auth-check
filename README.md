# auth-check

Authentication check for Express apps.

## Getting started

Add the package to your project using the npm ecosystem:

```bash
$ npm install auth-check --save
```

Partial example integration within an Express app:

```javascript
const auth_check = require('auth-check')

app.locals.admin_auth_check = auth_check({
  role: 'admin',
  redirect: '/admin/login'
})

app.get('/', app.locals.admin_auth_check, AdminController.home)
```

## Changelog

Get the project's history in [CHANGELOG.md](CHANGELOG.md).

## Maintainer

Andy Bettisworth <andy@accreu.com> https://andybettisworth.com

## License

This project is released under the [MIT License](LICENSE.txt).
