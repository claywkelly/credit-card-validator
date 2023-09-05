import express, {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
  Application
} from "express";
import { RegisterRoutes } from './routes/routes';
import { ValidateError } from "tsoa";

const app: Application = express();
const port = 5000;

app.use(express.json());
RegisterRoutes(app);

/*app.get('/credit-card-format', (req, res) => {
  res.json({"users": ["userOne", "userTwo", "userThree"]});
});*/

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export default app;

app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
});