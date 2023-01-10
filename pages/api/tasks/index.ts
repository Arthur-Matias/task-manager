// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import db from '../../../utils/db'
import Task from '../../../utils/models/Task';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task>
) {
    if(req.method === "GET"){
        // let data = db.getData();
        // res.status(200).json(data);
    }else if (req.method === "POST"){
        // db.addTask((JSON.parse(req.body) as Task))
        // res.status(200)
    }else{
        // res.status(404)
    }
}