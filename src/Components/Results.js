export function Results(props){
   return(
<div>
   <h2>Results</h2>
      {props.data.map(d => (
         <img key={d.id} src={d.images.fixed_width.url} alt={d.title} />
   ))}
</div>
   )
}