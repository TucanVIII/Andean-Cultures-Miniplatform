import Student from "../models/StudentModel.js"
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

// @desc GET all students
// @route GET /students
// @access Private
const getAllStudents = asyncHandler( async (req, res) => {
    const students = await Student.find().select("-password").lean()
    if(!students?.length) {
        return res.status(404).json({ message:"Not students found"})
    }
    res.json(students)
})

// @desc GET one student
// @route GET /students/:id
// @access Private
const getStudentById = asyncHandler(async (req, res) => {
    const {id} = req.params
    const student = await Student.findById(id).select("-password").lean().exec()
    if(!student) {
        return res.status(404).json({ message:"Not student found"})
    }
    res.json(student)
})


// @desc Create new student
// @route POST /students
// @access Public
const createNewStudent = asyncHandler( async (req , res) => {
    const { firstName, lastName, email, password, sections } = req.body
    if(!firstName || !lastName || !email || !password || !sections) {
        return res.status(400).json({ message:"All fields are required"})
    }

    const duplicate = await Student.findOne({ email }).collation({ locale:"es", strength:2 }).lean().exec()
    if(duplicate) {
        return res.status(409).json({ message:"Duplicate email student already registered" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const studentObject = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        sections: sections,
        certificate: {}
    }

    // Create and store new student
    const newStudent = await Student.create(studentObject);
    if(newStudent) {
        res.status(201).json({ message:`Student created ${studentObject.email}`})
    } else {
        res.status(400).json({ message:"Invalid student data received"})
    }
})

// @desc Update a student
// @route PATCH /students
// @access Private
const updateStudent = asyncHandler(async (req, res) =>{ 
    const { id, firstName, lastName, email, password } = req.body
    if( !id || !firstName || !lastName || !email || !password) {
        return res.status(400).json({ message:"All fields are required" })
    }

    const student = await Student.findById(id).exec()
    if(!student) {
        return res.status(404).json({ message:"Student not found" })
    }

    const duplicate = await Student.findOne({ mail }).collation({ locale:"es", strength:2 }).lean().exec()
    if(duplicate && duplicate?._id.toString() !== id){
        res.status(400).json({ message:"Duplicate mail already registered" })
    }

    student.firstName = firstName;
    student.lastName = lastName;
    student.password = password;

    if(password) {
        student.password = await bcrypt.hash(password, 10)
    }

    const updatedStudent = await student.save();

    res.json({ message:`Student ${updatedStudent.email} was updated`})
})

// @desc delete student
// @route DELETE /students
// @access Private
const deleteStudent = asyncHandler(async (req, res) => {
    const { id } = req.body;
    if(!id) {
        return res.status(400).json({ message:"Student ID required" })
    }

    const student = await Student.findById(id).exec()
    if(!student) {
        return res.status(400).json({ message:"Student not found" })
    }

    await Student.deleteOne({"_id":id})
    res.json({ message:`Estudiante ${student.email} fue eliminado correctamente`})
})

export {
    getAllStudents,
    getStudentById,
    createNewStudent,
    updateStudent,
    deleteStudent
};