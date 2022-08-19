import { Router } from 'express';
import UserModel from "../models/user.js"
import { cryptePassword, comparePassword } from '../customDependances/cryptpassword.js';

const userRouter = Router()



/***********Ajout d'un utilisateur avec protection password***********/

userRouter.post('/user', async (req, res) => {
  try {
      req.body.password = await cryptePassword(req.body.password)
      let user = new UserModel(req.body)
      await user.save()
      res.json(user)
  } catch (error) {
      console.log(error);
      res.json(error)
  }
})

  //**************recup d utilisateurs***********/

userRouter.get('/users', async (req, res) => {
  try {
    let users = await UserModel.find()
    res.json(users)
  } catch (error) {
    res.send(error)
  }
})


//**************recup d'un utilisateur avec id ***********/

userRouter.get('/user/:id', async (req, res) => {
    try {
      let user = await UserModel.findOne({_id: req.params.id});
      res.json(user)
    } catch (error) {
      res.send(error)
    }
  })




  //**************mmodifs d'un utilisateur***********/

  
  userRouter.put('/user/:id', async (req, res) => {
    try {
      let user = await UserModel.updateOne({ _id: req.params.id }, req.body);
      res.json(user)
    } catch (error) {
      res.send(error)
    }
  })
 //**************suppression d'un utilisateur***********/

 userRouter.delete('/user/:id', async (req, res) => {
    try {
      let user = await UserModel.deleteOne({ _id: req.params.id });
      res.json(user)
    } catch (error) {
      res.send(error)
    }
  })

export default userRouter