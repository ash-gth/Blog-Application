import User from '../Models/user.js'
export const signupUser = (request,responce) => {

            try{
            const user = request.body();
            // console.log('bhadwa chawanprash ', user);
            const newUser = new User(user);
            newUser.save();
            return responce.status(200).json({msg : 'signup successfull'})
            }catch(error){
            return responce.status(500).json({msg : 'error while creating user ' , error})
            }

}