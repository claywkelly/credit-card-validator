"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const tsoa_1 = require("tsoa");
const app = (0, express_1.default)();
const port = 5000;
(0, routes_1.RegisterRoutes)(app);
/*app.get('/credit-card-format', (req, res) => {
  res.json({"users": ["userOne", "userTwo", "userThree"]});
});*/
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
exports.default = app;
app.use(function errorHandler(err, req, res, next) {
    if (err instanceof tsoa_1.ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
        return res.status(422).json({
            message: "Validation Failed",
            details: err === null || err === void 0 ? void 0 : err.fields,
        });
    }
    if (err instanceof Error) {
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
    next();
});
//# sourceMappingURL=app.js.map