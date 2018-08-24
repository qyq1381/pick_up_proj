

module.exports = {
  register () {
    app.post('/register', (req,res) => {
      res.send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun`
      })
    })
  }
}