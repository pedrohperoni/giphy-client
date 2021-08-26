import { useState } from "react"
import { Results } from "./Results";

export function SearchForm(){

   const [inputText, setInputText] = useState("");
   const [data, setData] = useState(null);

   const search= () => {
      if(!inputText) {
         setData(undefined);
         return
      }

      fetch(
         `https://api.giphy.com/v1/gifs/search?q=${inputText}&api_key=99WGUuUplMOd8XwtBn4ltbbNibV5mC1R`
      )

         .then(response => response.json())
         .then(json => {
            setData(json.data)
            }
         );
   }

   return(
      <div className="searchForm">
         <h1>Search</h1>
         <form onSubmit={e => {
            e.preventDefault();
            search()}}
         >
            <input 
               type="text" 
               placeholder="Search anything..." 
               value={inputText} 
               onChange={e => setInputText(e.target.value)}
            />
            <button type="submit"/>
         </form>
         {data && (
            <Results
               data={data} 
            />
         )}
      </div>
   )
}