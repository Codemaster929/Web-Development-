import { Bookmark } from "lucide-react"

function Card(props){
    return (
        <div className="card">
            <div className="top">
                <img src={props.iconImg} alt="icon" />
                <button className="save">Save <Bookmark size={15} strokeWidth={1} /></button>
            </div>
            <div className="middle">
            <p className="companyName">{props.companyName} <span className="timeline">{props.dateposted}</span></p>
            
            <h3 className="jobDesc">{props.jobpost}</h3>
            <span className="tags">{props.tag1}</span>
            <span className="tags">{props.tag2}</span>
            </div>
            <div className="bottom">
                <span className="salary">{props.salary}
                    <span>{props.location}</span>
                </span>
                <span><button>Apply now </button></span>
            </div>
        </div>
    )
}
export default Card