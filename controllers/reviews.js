
exports.createReview = async (req, res) => {
    const { rating, comment } = req.body;
    const review = {
        user: req.profile._id,
        product: req.product._id,
        rating,
        comment,
    };

    req.profile.reviews.push(review);
    req.product.reviews.push(review);

    await req.profile.save();
    await req.product.save();

    res.json({ message: 'Review added successfully' });
};