exports.get = async (req, res) => {
  try{
    console.log(req.params.adress);

    res.json(req.params.adress);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
