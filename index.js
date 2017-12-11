'use strict'

module.exports = (options) => {
  /**
   * Locals
   */

  let role = (options.role || 'admin')
  let redirect = (options.redirect || '/admin/login')

  /**
   * Export auth check
   */

  return (req, res, next) => {
    if (req.app.get('env') === 'test') { return next(); }
    if (req.isAuthenticated() && req.app.locals.is_role(req.user, role)) { return next(); }
    res.redirect(redirect)
  }
}
