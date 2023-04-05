import React from 'react'

const Showrestraunt = ({Show}) => {
 
    return(
        <>
        {
            Show.map((rest)=>
            (
                <div className='para'><p>{rest.name}</p>
                   <p >{rest.location}</p>
                </div>
                 
                    
                    

                
                
                


            )
                
        


            
            
            )
         

                
                



        }
        
        
        </>


    )


}
export default Showrestraunt