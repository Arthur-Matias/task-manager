// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db'
import Task from '../../../utils/models/Task';
import { taskProps } from '../../../utils/types/task';
// import { Task } from '../../../utils/types/task';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task | undefined>
) {
    let slug = req.query.slug
    let data;
    if(req.method === "GET"){
        data = db.getTaskById(Number(slug));

        res.status(200).json(data);
    }else if (req.method === "DELETE"){
        res.status(200).json(db.removeTaskById(Number(slug)))
    }else{
        res.status(404).json(data)
    }
}