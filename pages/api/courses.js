
import course_list from "../../public/img/course_list"

export default function handler(req, res){
    res.status(200).json(course_list)
}