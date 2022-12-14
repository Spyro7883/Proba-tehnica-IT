import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Author from '../models/UserCreation';

const createAuthor = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const { email } = req.body;
  const saltRounds =10;
  //bcrypt.hash(p)
  const { password } = req.body;

  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    username,email,password
  });
  return author
    .save()
    .then((author) => res.status(201).json({ author }))
    .catch((error) => res.status(500).json({ error }));
};
const readAuthor = (req: Request, res: Response, next: NextFunction) => {
  const authorId = req.params.authorId;

  return Author.findById(authorId)
    .then((author) =>
      author
        ? res.status(200).json({ author })
        : res.status(404).json({ message: 'Not found' })
    )
    .catch((error) => {
      res.status(500).json({ error });
    });
};
const readAllAuthor = (req: Request, res: Response, next: NextFunction) => {
  return Author.find()
    .then((authors) => res.status(200).json({ authors }))
    .catch((error) => res.status(500).json({ error }));
};
const updateAuthor = (req: Request, res: Response, next: NextFunction) => {
  const authorId = req.params.authorId;

  return Author.findById(authorId)
    .then((author) => {
      if (author) {
        author.set(req.body);
        return author
          .save()
          .then((author) => res.status(201).json({ author }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
const deleteAuthor = (req: Request, res: Response, next: NextFunction) => {
  const authorId = req.params.authorId;

  return Author.findByIdAndDelete(authorId)
    .then((author) =>
      author
        ? res.status(200).json({ message: 'deleted' })
        : res.status(400).json({ message: 'Not found' })
    )
    .catch((error) => res.status(500).json({ error }));
};
export default {
  createAuthor,
  readAuthor,
  readAllAuthor,
  updateAuthor,
  deleteAuthor,
};