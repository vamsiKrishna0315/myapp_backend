import { Request, Response } from "express";
import { createUser, authenticateUser } from "../services/user_service"; // Import your service function
import Resp from "../enums/response";

class UserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { username, password, gender, status } = req.body;
      const result = await createUser(username, password, gender, status);

      return res.status(Resp.CREATED).json(result);
    } catch (error) {
      console.error("Error in creating user:", error);
      return res.status(Resp.SERVER_ERROR).json({ message: "Failed to create user" });
    }
  }

   // Method to handle user login
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const { username, password } = req.body;
            const token = await authenticateUser(username, password);
            return res.status(Resp.SUCCESS).json({ token });
        } catch (error) {
            return res.status(Resp.UNAUTHORIZED).json({ message: error });
        }
    }
}

export default UserController;
