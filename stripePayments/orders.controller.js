async function addOrder(req, res, next) {
    const cart = res.locals.cart;

    let userDocument;
    try {
        userDocument = await User.findById(res.locals.uid)
    } catch (error) {
        return next (error)
    }
}