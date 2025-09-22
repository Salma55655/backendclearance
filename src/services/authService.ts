import Staff from "../models/Staff";
import Student  from "../models/Student";

export async function authenticate(email: string, password: string, role: string) {
  // Universal password check (replace with hashed passwords later!)
  if (password !== "password123") return null;

  if (role === "Student") {
    return await Student.findOne({ $or: [{ email }, { studentId: email }] });
  } else {
    return await Staff.findOne({ email, role });
  }
}
