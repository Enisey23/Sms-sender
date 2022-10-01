import PostModel from '../models/Post.js';

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      phone: req.body.phone,
      text: req.body.text,
      user: req.userId,
    });
    
   
    const post = await doc.save(); 
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось отправить сообщение',
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const Id = req.userId
    const posts = await PostModel.find({
      user: Id,
    }).populate('user').exec();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить сообщения',
    });
  }
};
