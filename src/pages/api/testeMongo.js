import {connectToDatabase} from '../../config/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

//req: NextApiRequest, res: NextApiResponse

export default async (req, res) => {
  
  //const slug = req.query.id; 
  
  //if(!slug) return res.json("Página não encontrada!")

  const { db, client } = await connectToDatabase();

  if(client.isConnected()) {
    console.log('connected')
    //try {
      console.log('inside try')
      const result = await db
      .collection('lotofacil')
      .aggregate( 
        [ 
          { $limit : 3003 },
          {
            '$project': {
              '_id': 0,
              'combinacao': 1, 
              'numberOfElements': {
                '$size': {
                  '$setIntersection': [
                    '$combinacao', [
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
                    ]
                  ]
                }
              }
            }
          }, {
            '$match': {
              'numberOfElements': 10
            }
          } 
        ]
      ).toArray()
      

      if(result){
        console.log(result.length)
        return res.status(200).json(result)
      }else{
        console.log('after query')
      }
      
    /*} catch (error) {
      return res.status(200).json(error)
    }*/
    

    /*let total = 0;
    if(pageViewBySlug) {
      total = pageViewBySlug.total + 1;
      await db.collection('pageviews').updateOne({ slug }, { $set: { total }})
    } else {
      total = 1;
      await db.collection('pageviews').insertOne({ slug, total })
    }*/
    
    
    
  }

  return res.status(500).json({ error: 'client DB is not connected' })

}