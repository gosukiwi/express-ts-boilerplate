"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var express_1 = require("express");
var http_errors_1 = require("http-errors");
var cookie_parser_1 = require("cookie-parser");
var morgan_1 = require("morgan");
var dotenv_1 = require("dotenv");
var index_1 = require("./routes/index");
var users_1 = require("./routes/users");
dotenv_1.default.config({
    path: path_1.default.join(__dirname, "..", process.env.NODE_ENV === undefined
        ? ".env.development"
        : ".env.".concat(process.env.NODE_ENV)),
});
var app = (0, express_1.default)();
// view engine setup
app.set("views", path_1.default.join(__dirname, "..", "views"));
app.set("view engine", "hbs");
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/", index_1.default);
app.use("/users", users_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res, next) {
    var _a;
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status((_a = err.status) !== null && _a !== void 0 ? _a : 500);
    res.render("error");
});
// initialize app
var port = process.env.PORT;
var host = typeof process.env.HOST === "string" ? process.env.HOST : "http://localhost";
app.listen(port, function () {
    console.log("\u26A1\uFE0F [SERVER]: Express is running at ".concat(host, ":").concat(port));
});
