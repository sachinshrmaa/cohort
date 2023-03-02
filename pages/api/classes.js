
import classes from "../../classes/Classes" 

export default function handler(req, res){
    res.status(200).json(classes)
}