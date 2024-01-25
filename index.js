const express = require("express");
const userRouter = require("./router/user.router.js");
const authRouter = require("./router/auth.router.js");
const port = 5000;
const app = express();


app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 501;
  const messege = err.messege || 'internal server err...';
  res.status(statuscode).json({
    success: false,
    statuscode,
    messege,
  });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
