"use strict"

module.exports = (role, redirect_uri) => {
  /**
   * Export middleware.
   */

  return (req, res, next) => {
    if (req.isAuthenticated() && req.user.roles.includes(role)) {
      next()
    } else {
      res.redirect(redirect_uri)
    }
  }
}
