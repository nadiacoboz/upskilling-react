import type { JSX } from "react"
import type { movieProps } from "./types"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router"
 
 
function PrintMovie({movie}:movieProps): JSX.Element{
    return(
        <>
            <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src= {movie.pictureUrl}
            alt={`Movie poster ${movie.title}`}
            style={{width: "300px", objectFit:'cover' }}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Subtitle>RD: {movie.releaseDate.toISOString().split('T')[0]}</Card.Subtitle>
                <Card.Text> 
                {movie.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Text>
                    <Link to={`/movies/${movie.movieId}`} >
                        <Button variant="light" size="sm">
                            Movie detail
                        </Button>
                    </Link>
                </Card.Text>
            </Card.Footer>
            </Card>
        </>
    )
 
}
export default PrintMovie
 