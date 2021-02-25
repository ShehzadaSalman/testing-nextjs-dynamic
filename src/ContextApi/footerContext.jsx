import {createContext, useState} from 'react';
export const footerContext = createContext();



const footerProvider = (props) => {
  const [footerContent, setFooterContent] = useState([]); 





    return <footerContext.Provider value="hello worlldddddddd">
           {props.children}
         </footerContext.Provider>
}
export default footerProvider;