import mongoose from "mongoose";
// import dotenv from "dotenv";
import Student from "./models/Student";
import Staff from "./models/Staff"; // 

// load .env
// dotenv.config();
const MONGO_URI = "mongodb+srv://salmaahmed:l87pip9tO3UbTMiO@cluster0.8w0m0dt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

import { Role, ClearanceStatus } from "./types";

const subjectTeachers = [
  { id: 'staff-5', email: 'bopape@ala.org', name: 'Dr. Bopape', role: Role.SubjectTeacher, subject: 'Entrepreneurial Leadership' },
  { id: 'staff-6', email: 'nkosi@ala.org', name: 'Ms. Nkosi', role: Role.SubjectTeacher, subject: 'African Studies' },
  { id: 'staff-7', email: 'williams@ala.org', name: 'Mr. Williams', role: Role.SubjectTeacher, subject: 'Writing & Rhetoric' },
  { id: 'staff-8', email: 'pdavis@ala.org', name: 'Prof. Davis', role: Role.SubjectTeacher, subject: 'Mathematics' },
  { id: 'staff-9', email: 'einstein@ala.org', name: 'Dr. Einstein', role: Role.SubjectTeacher, subject: 'Physics' },
  { id: 'staff-10', email: 'ada@ala.org', name: 'Prof. Ada', role: Role.SubjectTeacher, subject: 'Computer Science' }
];

const students = [
  {
    id: 'student-1',
    studentId: 'ALA2025-001',
    email: 'jdoe25@alastudents.org',
    name: 'John Doe',
    role: Role.Student,
    hall: 'Mandela Hall',
    room: '101A',
    hallHeadName: 'Mr. Jones',
    books: [
      { id: 'book-1', title: 'Calculus I', bookCode: 'MATH101', returned: true },
      { id: 'book-2', title: 'Intro to Physics', bookCode: 'PHY101', returned: false },
    ],
    fines: [
      { id: 'fine-1', reason: 'Late Library Book', amount: 15.00, paid: true, receiptUrl: 'https://picsum.photos/200' },
      { id: 'fine-2', reason: 'Damaged Lab Equipment', amount: 50.00, paid: false },
    ],
    subjectClearances: [
      { id: 'sc-1', subjectName: 'Entrepreneurial Leadership', teacherId: 'staff-5', teacherName: 'Dr. Bopape', status: ClearanceStatus.Approved, comment: '', updatedAt: new Date().toISOString() },
      { id: 'sc-2', subjectName: 'African Studies', teacherId: 'staff-6', teacherName: 'Ms. Nkosi', status: ClearanceStatus.Approved, comment: '', updatedAt: new Date().toISOString() },
    ],
    approvals: [
      { id: 'appr-1', department: 'HallHead', status: ClearanceStatus.Approved, approverName: 'Mr. Jones', comment: 'Room clean, no issues.', updatedAt: new Date().toISOString() },
    ],
  },
  // add other students here...
];

const staff = [
  { id: 'staff-1', email: 'jones@ala.org', name: 'Mr. Jones', role: Role.HallHead },
  { id: 'staff-2', email: 'davis@ala.org', name: 'Mrs. Davis', role: Role.Finance },
  { id: 'staff-3', email: 'mike@ala.org', name: 'Officer Mike', role: Role.Security },
  { id: 'staff-4', email: 'admin@ala.org', name: 'Admin User', role: Role.Admin },
  ...subjectTeachers,
];

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas");

    await Student.deleteMany({});
    await Staff.deleteMany({});
    console.log("🗑️ Cleared old data");

    await Student.insertMany(students);
    await Staff.insertMany(staff);
    console.log("🌱 Seeded new data");

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
};

seed();
