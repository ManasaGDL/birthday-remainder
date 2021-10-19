import React from "react"
const List=({list})=>{


return <>

<ul>
{list.map((item)=>{
    return <div key={item.id} className="person">
           <img src={item.img} alt={item.name}/>
       <div>
           <h4>{item.name}</h4>
           <p>{item.age}</p>
       </div>
 


    </div>
})}
</ul>
</>

}
export default List;