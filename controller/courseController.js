import course from "../models/courseModel.js";

export const create = async(req, res)=>{
    try {

        const courseData = new course(req.body);
        if(!courseData){
            return res.status(404).json({msg: "course data not found"});
        }

        await courseData.save();
        res.status(200).json({msg: "course created successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getAll = async(req, res) =>{
    try {

        const courseData = await course.find();
        if(!courseData){
            return res.status(404).json({msg:"course data not found"});
        }
        res.status(200).json(courseData);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getOne = async(req, res) =>{
    try {

        const id = req.params.id;
        const courseExist = await course.findById(id);
        if(!courseExist){
            return res.status(404).json({msg: "course not found"});
        }
        res.status(200).json(courseExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const update = async(req, res) =>{
    try {

        const id = req.params.id;
        const courseExist = await course.findById(id);
        if(!courseExist){
            return res.status(401).json({msg:"course not found"});
        }

        const updatedData = await course.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "course updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const deletecourse = async(req, res) =>{
    try {

        const id = req.params.id;
        const courseExist = await course.findById(id);
        if(!courseExist){
            return res.status(404).json({msg: "course not exist"});
        }
        await course.findByIdAndDelete(id);
        res.status(200).json({msg: "course deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}