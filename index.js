"use strict"

module.exports = (options) => {
  /**
   * Locals
   */

  let role = (options.role || 'users')
  let redirect = (options.redirect || '/users/login')

  /**
   * Export middleware.
   */

  return (req, res, next) => {
    if (req.isAuthenticated() && req.user.roles.includes(role)) {
      next()
    } else {
      res.redirect(redirect)
    }
  }
}
