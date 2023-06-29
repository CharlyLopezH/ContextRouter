import Bisnieto from "./Bisnieto";

export const Nieto=({data})=>{
    return(
    <>
    <div className="row"> <h3> En el nieto: {data}  </h3>  
    <Bisnieto data={data}/>  
    </div>
      </>
    )
}

export default Nieto;