import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import env from '@/environment/env';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        const data = {
            username:req.body.username,
            password:req.body.password
        }

        axios.post(env.backendUrl+"/auth",data).then(
          ({data})=>{
            console.log("token",data.token)
            res.status(200).json(data)
          },
          (err)=>{
            console.log("error",err)
            res.status(400).json({ok:false})
          }
          )
       
    }
}
