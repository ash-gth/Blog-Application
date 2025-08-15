import user from '../Models/user.js'
export const signupUser = (request,responce) => {

            try{
            const user = request.body();
            const newUser = newUser(user);
            newUser.save();
            return responce.status(200).json({msg : 'signup successfull'})
            }catch(error){
            return responce.status(500).json({msg : 'Issue'})
            
            }

}