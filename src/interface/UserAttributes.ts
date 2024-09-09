export interface UserAttributes {
  id: number;
  username: string;
  password: string;
  gender?: string;
  status?: number;
  created_on?: Date;
}
export interface UserCreationAttributes extends Partial<UserAttributes> {
  // 'id' and 'created_on' are optional when creating a new user
}