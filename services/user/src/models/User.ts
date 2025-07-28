import mongoose from "mongoose";

export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: string;  
  profilePicture?: string;
  joinDate?: string;  
  refreshToken?: string[];
  role: 'customer' | 'admin';
}

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  address: { type: String },  
  profilePicture: { type: String, default: "" },
  joinDate: { type: String, required: true },  
  refreshToken: { type: [String], default: [] },
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
});

const userModel = mongoose.model<IUser>("Users", userSchema);

export default userModel;