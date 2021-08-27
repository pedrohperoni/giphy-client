import { useState } from "react"
import { Results } from "./Results";
import "../styles/searchForm.css"

export function SearchForm(){

   const [inputText, setInputText] = useState("");
   const [data, setData] = useState(null);

   const search= () => {
      if(!inputText) {
         setData(undefined);
         return
      }

      fetch(
         `https://api.giphy.com/v1/gifs/search?q=${inputText}&limit=50&api_key=99WGUuUplMOd8XwtBn4ltbbNibV5mC1R`
      )

         .then(response => response.json())
         .then(json => {
            setData(json.data)
            }
         );
   }

   return(
      <div className="searchForm">
         <div className="searchContainer">
            <h1>Search Gifs</h1>
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
         </div>
         {data && (
            <div className="gifsContainer">
               <Results
                  data={data} 
               />
            </div>
         )}
      </div>
   )
}