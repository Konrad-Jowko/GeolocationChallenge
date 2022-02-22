exports.get = async (req, res) => {
  try{
    console.log(req.ip);

    res.json(req.ip);
    // res.json(req.headers['x-forwarded-for']);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
