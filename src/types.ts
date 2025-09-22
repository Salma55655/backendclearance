// src/types.ts

export enum Role {
  Student = "Student",
  HallHead = "HallHead",
  Finance = "Finance",
  Security = "Security",
  Admin = "Admin",
  SubjectTeacher = "SubjectTeacher",
}

export enum ClearanceStatus {
  Pending = "Pending",
  Approved = "Approved",
  Flagged = "Flagged",
}

// Optional: Type definitions for Student and Staff
export interface Student {
  id: string;
  studentId: string;
  email: string;
  name: string;
  role: Role;
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
    status: ClearanceStatus;
    comment: string;
    updatedAt: string;
  }[];
  approvals: {
    id: string;
    department: string;
    status: ClearanceStatus;
    approverName: string;
    comment: string;
    updatedAt: string;
  }[];
}

export interface Staff {
  id: string;
  email: string;
  name: string;
  role: Role;
  subject?: string;
}

export type User = Student | Staff;
