function isSignedIn(req, res, next) {
    if (req.session.user) {
       return next();
    } else {
        res.redirect('/auths-for-project/sign-in');
    }
}

module.exports = isSignedIn;

