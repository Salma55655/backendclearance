import mongoose, { Schema, Document } from "mongoose";

export interface StaffDoc extends Document {
  email: string;
  name: string;
  role: string;
  subject?: string;
}

const StaffSchema = new Schema<StaffDoc>({
  email: { type: String, required: true, unique: true },
  name: String,
  role: String,
  subject: String
});



// export const Staff = mongoose.model<StaffDoc>("Staff", StaffSchema);



export interface IStaff extends Document {
  id: string;
  email: string;
  name: string;
  role: string;
  subject?: string; // optional for subject teachers
}

const staffSchema = new Schema<IStaff>({
  id: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  subject: { type: String }, // optional
});

const Staff = mongoose.model<IStaff>("Staff", staffSchema);
export default Staff;