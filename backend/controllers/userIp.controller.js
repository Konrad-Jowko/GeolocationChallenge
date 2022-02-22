exports.get = async (req, res) => {
  try{
    res.json(req.headers['x-forwarded-for']);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
