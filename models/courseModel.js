import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  courseName: { type: String, required: true },
  section: String,
  semester: String,
  student: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});


export default mongoose.model("course", courseSchema);