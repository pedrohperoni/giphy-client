export function Results(props){
   return(
      <div className="results">
            {props.data.map(d => (
               <img className="gif" key={d.id} src={d.images.fixed_height.url} alt={d.title} />
         ))}
      </div>
   )
}