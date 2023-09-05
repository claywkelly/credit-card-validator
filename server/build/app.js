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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUtpQjtBQUNqQiw0Q0FBaUQ7QUFDakQsK0JBQXFDO0FBR3JDLE1BQU0sR0FBRyxHQUFnQixJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFFbEIsSUFBQSx1QkFBYyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXBCOztLQUVLO0FBRUwsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6RSxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLEdBQUcsQ0FBQztBQUVuQixHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsWUFBWSxDQUMzQixHQUFZLEVBQ1osR0FBYyxFQUNkLEdBQWUsRUFDZixJQUFrQjtJQUVsQixJQUFJLEdBQUcsWUFBWSxvQkFBYSxFQUFFO1FBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLE9BQU8sRUFBRSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsTUFBTTtTQUNyQixDQUFDLENBQUM7S0FDSjtJQUNELElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtRQUN4QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sRUFBRSx1QkFBdUI7U0FDakMsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQyxDQUFDIn0=