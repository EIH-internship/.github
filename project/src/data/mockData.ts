import { User, Club, Document, Announcement, Branch } from '../types';

export const branches: Branch[] = [
  { id: '1', name: 'Clubs and Associations', nameAmharic: 'ክበባት እና ማህበራት', description: 'Student clubs and associations management' },
  { id: '2', name: 'Academic Affairs', nameAmharic: 'የትምህርት ጉዳዮች', description: 'Academic programs and curriculum oversight' },
  { id: '3', name: 'Student Services', nameAmharic: 'የተማሪ አገልግሎቶች', description: 'Student support and welfare services' },
  { id: '4', name: 'Campus Life', nameAmharic: 'የካምፓስ ህይወት', description: 'Campus events and activities coordination' },
  { id: '5', name: 'Sports and Recreation', nameAmharic: 'ስፖርት እና መዝናኛ', description: 'Athletic programs and recreational activities' },
  { id: '6', name: 'Cultural Affairs', nameAmharic: 'የባህል ጉዳዮች', description: 'Cultural events and heritage programs' },
];

export const users: User[] = [
  { id: '1', name: 'Admin User', email: 'admin@dbu.edu.et', role: 'super-admin' },
  { id: '2', name: 'Branch Admin', email: 'clubs.admin@dbu.edu.et', role: 'branch-admin', branch: 'Clubs and Associations' },
  { id: '3', name: 'John Doe', email: 'john.doe@student.dbu.edu.et', role: 'student' },
];

export const mockDocuments: Document[] = [
  { id: '1', name: 'Annual Report 2024.pdf', type: 'report', url: '#', uploadedAt: '2024-01-15', uploadedBy: 'Computer Science Club', size: '2.4 MB' },
  { id: '2', name: 'Event Proposal - Tech Week.pdf', type: 'proposal', url: '#', uploadedAt: '2024-01-10', uploadedBy: 'Engineering Society', size: '1.8 MB' },
];

export const clubs: Club[] = [
  {
    id: '1',
    name: 'Computer Science Club',
    description: 'A community for CS students to collaborate, learn, and build innovative projects together.',
    branch: 'Clubs and Associations',
    status: 'approved',
    createdAt: '2024-01-01',
    president: 'Alice Johnson',
    members: 45,
    documents: mockDocuments,
    logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2'
  },
  {
    id: '2',
    name: 'Engineering Society',
    description: 'Promoting engineering excellence through workshops, competitions, and industry connections.',
    branch: 'Clubs and Associations',
    status: 'approved',
    createdAt: '2024-01-05',
    president: 'Bob Smith',
    members: 62,
    documents: [],
    logo: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2'
  },
  {
    id: '3',
    name: 'Literary Society',
    description: 'Fostering creativity and literary appreciation through writing workshops and book discussions.',
    branch: 'Cultural Affairs',
    status: 'pending',
    createdAt: '2024-01-12',
    president: 'Carol Wilson',
    members: 28,
    documents: [],
    logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2'
  },
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'New Student Orientation Week',
    content: 'Welcome new students! Join us for orientation activities from March 1-7, 2024.',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    createdAt: '2024-02-20',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Annual Tech Conference',
    content: 'DBU Tech Conference 2024 - Innovation and Technology for Tomorrow. Register now!',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    createdAt: '2024-02-18',
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Student Council Elections',
    content: 'Nominations open for Student Council positions. Be the change you want to see!',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    createdAt: '2024-02-15',
    priority: 'high'
  },
];