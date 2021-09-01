import "../styles/gifs.css"

export function Gifs(props){
   return(
      <div className="results">
            {props.data.map(d => (
               <img className="gif" key={d.id} src={d.images.fixed_width.url} alt={d.title} />
         ))}
      </div>
   )
}