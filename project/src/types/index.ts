export interface User {
  id: string;
  name: string;
  email: string;
  role: 'super-admin' | 'branch-admin' | 'student';
  branch?: string;
  avatar?: string;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  branch: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  president: string;
  members: number;
  documents: Document[];
  logo?: string;
}

export interface Document {
  id: string;
  name: string;
  type: 'report' | 'proposal';
  url: string;
  uploadedAt: string;
  uploadedBy: string;
  size: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  priority: 'high' | 'medium' | 'low';
}

export interface Branch {
  id: string;
  name: string;
  nameAmharic: string;
  description: string;
  adminEmail?: string;
}