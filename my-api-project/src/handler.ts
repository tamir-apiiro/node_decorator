import { CustomDecorator } from "./decorator";

export class ApiHandler {
  @CustomDecorator({ some_flag: true })
  handleRequest(req: any, res: any) {
    res.json({ message: "Hello, world!" });
  }
}
