import React from 'react'

function SharkbgThumbnail({title, description, bg}) {
    console.log(bg)
    return (
   <>
       <div className="shark-thumbnail-second pt-5 pb-5 px-5">
             <h4 className="white-paragraph">
             {title}</h4>
              
              <p className="white-paragraph mt-0">
               {description}
            </p> 
         </div>
         <style jsx>{`
         .shark-thumbnail-second{ display: flex; flex-direction: column;
              justify-content: center;  min-height: 300px; 
              background-image: url('${bg}');
            }
         .shark-thumbnail-second h4{font-size: 1.3rem;}
         .shark-thumbnail-second p{}
         
         
         `}</style>
    </>
    )
}

export default SharkbgThumbnail
