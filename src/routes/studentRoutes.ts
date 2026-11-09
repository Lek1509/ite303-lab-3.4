import { Router } from 'express';
import { 
  getStudents, 
  getStudentById, 
  createStudent, 
  updateStudent, 
  deleteStudent
} from '../controllers/studentController.js';

const router = Router();

// Read & Create routes from previous lessons
router.get('/', getStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);

// New Update and Delete routes for Chapter 3.3
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;