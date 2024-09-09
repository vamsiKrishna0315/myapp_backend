import User from '../models/user_model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import { UserAttributes } from '../interface/userAttributes';


export const createUser = async (username: string, password: string, gender: string, status: number) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword, gender, status });
    const token = jwt.sign({ id: newUser.id, username: newUser.username }, process.env.JWT_SECRET!, {
      expiresIn: '1h', 
    });

    return { user: newUser, token }; 
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("User creation failed");
  }
};

export const authenticateUser = async (username: string, password: string) => {
    // Find user by username
    const user = await User.findOne({ where: { username } });
    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET || 'default_secret',
        { expiresIn: '1h' } 
    );

    return token;
};
