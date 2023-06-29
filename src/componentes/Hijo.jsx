import Nieto from "./Nieto";

export const Hijo=({data})=>{
    return(
        <>
    <div className="row"> <h3> En el hijo: {data}  </h3>      
    <Nieto data={data}/>    
    </div>
      </>
    )
}
export default Hijo;