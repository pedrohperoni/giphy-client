import { useState } from "react"

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
      <div>
         <form onSubmit={e => {
            e.preventDefault();
            search()}}
         >
            <input 
               type="text" 
               placeholder="Search GIFS" 
               value={inputText} 
               onChange={e => setInputText(e.target.value)}
            />
            <button type="submit" value="Search"/>
         </form>
         {data && (
            <div>
            <h2>Results</h2>
            <ul>
               {data.map(d => (
                  <li key={d.id}>
                     <img src={d.images.fixed_width.url} alt={d.title} />
                  </li>
               ))}
            </ul>
         </div>
         )}


      </div>
   )
}