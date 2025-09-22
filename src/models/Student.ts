import mongoose, { Schema, Document } from "mongoose";

export interface Book {
  id: string;
  title: string;
  bookCode: string;
  returned: boolean;
}

export interface Fine {
  id: string;
  reason: string;
  amount: number;
  paid: boolean;
  receiptUrl?: string;
}

export interface SubjectClearance {
  id: string;
  subjectName: string;
  teacherId: string;
  teacherName: string;
  status: string;
  comment: string;
  updatedAt: string;
}

export interface Approval {
  id: string;
  department: string;
  status: string;
  approverName: string;
  comment: string;
  updatedAt: string;
}

export interface StudentDoc extends Document {
  studentId: string;
  email: string;
  name: string;
  role: string;
  hall: string;
  room: string;
  hallHeadName: string;
  books: Book[];
  fines: Fine[];
  subjectClearances: SubjectClearance[];
  approvals: Approval[];
}


// 1️⃣ Define TypeScript interface for Student
export interface IStudent extends Document {
  id: string;
  studentId: string;
  email: string;
  name: string;
  role: string;
  hall: string;
  room: string;
  hallHeadName: string;
  books: { id: string; title: string; bookCode: string; returned: boolean }[];
  fines: { id: string; reason: string; amount: number; paid: boolean; receiptUrl?: string }[];
  subjectClearances: {
    id: string;
    subjectName: string;
    teacherId: string;
    teacherName: string;
    status: string;
    comment: string;
    updatedAt: string;
  }[];
  approvals: {
    id: string;
    department: string;
    status: string;
    approverName: string;
    comment: string;
    updatedAt: string;
  }[];
}

// 2️⃣ Define Mongoose schema
const studentSchema = new Schema<IStudent>({
  id: { type: String, required: true, unique: true },
  studentId: { type: String, required: true },
  email: String,
  name: String,
  role: String,
  hall: String,
  room: String,
  hallHeadName: String,
  books: [{ id: String, title: String, bookCode: String, returned: Boolean }],
  fines: [{ id: String, reason: String, amount: Number, paid: Boolean, receiptUrl: String }],
  subjectClearances: [
    {
      id: String,
      subjectName: String,
      teacherId: String,
      teacherName: String,
      status: String,
      comment: String,
      updatedAt: String,
    },
  ],
  approvals: [
    {
      id: String,
      department: String,
      status: String,
      approverName: String,
      comment: String,
      updatedAt: String,
    },
  ],
});


const StudentSchema = new Schema<StudentDoc>({
  studentId: { type: String, required: true, unique: true },
  email: String,
  name: String,
  role: String,
  hall: String,
  room: String,
  hallHeadName: String,
  books: [{ id: String, title: String, bookCode: String, returned: Boolean }],
  fines: [{ id: String, reason: String, amount: Number, paid: Boolean, receiptUrl: String }],
  subjectClearances: [{
    id: String,
    subjectName: String,
    teacherId: String,
    teacherName: String,
    status: String,
    comment: String,
    updatedAt: String
  }],
  approvals: [{
    id: String,
    department: String,
    status: String,
    approverName: String,
    comment: String,
    updatedAt: String
  }]
});

// export const Student = mongoose.model<StudentDoc>("Student", StudentSchema);
const Student = mongoose.model<IStudent>("Student", studentSchema);
export default Student;


// // models/Student.ts
// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

// const studentSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   role: { type: String, default: "student" },
//   password: { type: String, required: true }
// });

// Hash password before save
