import React from 'react'
import Card from './components/card'
import User from './components/user'

const jobOpenings = [
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1HgAOQZBf48TI55AvzbnfV0IFrCCrX6ldg&s",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfjAs7X8L6qkIMkBjykQqcWMfYrYGBs24OQ&s",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/026/775/594/non_2x/meta-logo-icon-free-vector.jpg",
    name: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    name: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    name: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymlLk2n_Q7xiznxOX7LfDQYZPCAt8g-GCEw&s",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80",
    name: "X (Twitter)",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
    name: "Adobe",
    datePosted: "6 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p@2x.png",
    name: "NVIDIA",
    datePosted: "12 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR3neyop9Cpm0RBJU4pRFAXIpYAk6qqf2OA&s",
    name: "Tesla",
    datePosted: "9 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "California, USA"
  }
];


const App = () => {
  return (
    <div className='parent'>
{
jobOpenings.map(function(element,indx){
  
// here the indx helps react uniquely indentify the elements 
 return <div key={indx}>    
   <Card iconImg={element.brandlogo} companyName={element.name} dateposted={element.datePosted} jobpost={element.post} tag1={element.tag1} tag2={element.tag2} salary={element.pay} location={element.location}/>
   </div>

})}
    </div>
  )
}

export default App
