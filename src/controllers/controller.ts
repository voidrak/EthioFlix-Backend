import { Request, Response, NextFunction } from "express";
import MovieModel from "../models/model";

const getAllMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movie = await MovieModel.find({});
    res.status(200).json({ movie });
  } catch (error: any) {
    res.status(404).json({ message: error.errors.name.message });
    next(error);
  }
};

export { getAllMovies };
