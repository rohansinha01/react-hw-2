const Movie = (props) => {
    return(
        <div className="movie">
            <div id="name">Name: {props.name}</div>
            <div id="year">Year: {props.year}</div>
            <div id="rating">Rating: {props.rating}</div>
            <img src={props.img} /> 
        </div>
    )
}

export default Movie