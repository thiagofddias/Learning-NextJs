export default (req, res) => {
  if(req.method === "GET") {
    res.status(200).json({ name: 'John Doe' })
  } else {
    res.status(200).json({ name: 'John Cleiton' })
  }
}
