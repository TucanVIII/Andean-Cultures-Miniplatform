import Questions from "../models/QuestionModel.js";
import asyncHandler from "express-async-handler";

// @desc GET all questions
// @route GET /questions
// @access Private
const getAllQuestions = asyncHandler(async(req,res) => {
    const filter = req.query.sectionId ? { sectionId: req.query.sectionId } : {};
    const questions = await Questions.find(filter).select('+correctAnswer').lean();
    if(!questions?.length){
        return res.status(404).json({ message:"Not questions found" })
    }
    res.json(questions)
});

// @desc POST create new question
// @route POST /questions
// @access Private
const createQuestion = asyncHandler(async(req,res) => {
    const { sectionId,statement,options,correctAnswer } = req.body;
    if(!sectionId || !statement || !options || !correctAnswer){
        return res.status(400).json({ message:"All fields are required" })
    }

    const questionObject = { sectionId,statement,options,correctAnswer}
    const newQuestion = await Questions.create(questionObject)
    if(newQuestion){
        res.status(201).json({ message:`Question created in the section: ${sectionId}`})
    } else {
        res.status(400).json({ message:"Invalid question data received"})
    }
});

// @desc Update a question
// @route PATCH /questions
// @access Private
const updateQuestion = asyncHandler(async(req,res) => {
    const { id,sectionId,statement,options,correctAnswer } = req.body;
    if(!id || !sectionId || !statement || !options || !correctAnswer){
        return res.status(400).json({ message:"All fields are required" })
    };

    const question = await Questions.findById(id).exec();
    if(!question){
        return res.status(404).json({ message:"Question not found"})
    };

    question.sectionId = sectionId;
    question.statement = statement;
    question.options = options;
    question.correctAnswer = correctAnswer;

    const updatedQuestion = await question.save()

    res.json({ message:`Question ${updatedQuestion._id} was updated`})
});

// @desc delete question
// @route DELETE /questions
// @access Private
const deleteQuestion = asyncHandler(async(req,res) => {
    const { id } = req.body
    if(!id){
        return res.status(400).json({ message:"Question Id requires to delete" })
    }

    const question = await Questions.findById(id).exec();
    if(!question){
        return res.status(404).json({ message:"Question not found" })
    }
    const deletedId = question._id;
    await Questions.deleteOne({"_id":id});
    res.json({ message:`Question with Id: ${deletedId} was deleted`});
});

// @desc GET question to the user interface
// @route GET /quiz/:sectionId
// @access Private
const getQuizQuestion = asyncHandler(async(req,res) => {
    const { sectionId } = req.params;
    const questions = await Questions.find({ sectionId }).lean();

    if(!questions || questions.length===0){
        return res.status(404).json({ message:"Question not found" })
    }
    res.json(questions)
});

export {
    getAllQuestions,
    updateQuestion,
    createQuestion,
    deleteQuestion,
    getQuizQuestion
};