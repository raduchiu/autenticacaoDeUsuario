import app from './app';

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.json({
    ok: 'api-authenticate',
  });
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
