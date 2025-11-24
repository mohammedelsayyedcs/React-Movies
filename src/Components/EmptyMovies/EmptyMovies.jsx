import './EmptyMovies.css'

export default function EmptyMovies() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <h4 className="text-muted text-center">{"No movies available for the selected category."}</h4>
        </div>
    )
}
