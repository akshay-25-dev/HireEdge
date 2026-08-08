const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)


/* 404 handler - catches requests to routes that don't exist */
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found."
    })
})

/* central error handler - catches errors thrown/rejected anywhere in the route
   handlers above (Express 5 automatically forwards rejected promises from async
   handlers here). Without this, unhandled errors fall through to Express's
   default handler, which can leak internal stack traces to the client. */
app.use((err, req, res, next) => {
    console.error(err)

    const status = err.status || 500
    const message = status === 500 ? "Something went wrong. Please try again." : err.message

    res.status(status).json({ message })
})

module.exports = app