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
        console.log(data)
        axios.post(env.backendUrl+"/auth",data).then((resp)=>{
            console.log("resp",resp)
            res.status(200).json(resp.data)
        })
       
    }
}
