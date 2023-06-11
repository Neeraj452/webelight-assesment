import { connect } from "mongoose"
let url='mongodb+srv://neeraj-maurya:neeraj-maurya@cluster0.w4mu8h9.mongodb.net/NewDB'
function connectToMongoDB(){
  return connect(url).then(()=>console.log("DB Connection Succeefully")).catch(()=>console.log("Something went wrong"))
}
connectToMongoDB()


