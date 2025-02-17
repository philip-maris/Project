import dbConnect from '../../utils/db';
import Project from '../../models/Project'

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return;
      }
      const { title, author, course, file } = req.body;

      await dbConnect()

      const existingTitle = await Project.findOne({ title: title });
      if (existingTitle) {
        res.status(422).json({ message: 'title exists already!' });
        return;
      }
    
      const newProject = new Project({
       title,
       author,
       course,
       file
      });
    
      const project = await newProject.save();
    //   await db.disconnect();
      res.status(201).send({
        message: 'Created project!',
        _id: project._id,
        title: project.title,
        author: project.author,
        course: project.course,
        file: project.file
      });

}

export default handler