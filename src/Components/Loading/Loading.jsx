import './Loading.css'

export default function Loading() {
    return (
        <div className='body d-flex justify-content-center align-items-center'>
            <div className="loading-spinner spinner-grow text-danger"
                role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
