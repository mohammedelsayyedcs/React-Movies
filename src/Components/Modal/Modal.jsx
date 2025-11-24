import { useSelector } from 'react-redux'
import './Modal.css'
import Movie from '../Movie/Movie';

export default function Modal({ onClose }) {
    // Redux
    const cartArr = useSelector(state => state.movies.cartArr);
    console.log(cartArr)

    return (
        <div className="modal modal-xl" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Movies</h5>
                    </div>
                    <div className="modal-body row">
                        {
                            cartArr.map((item) => {
                                return <Movie key={item.id} movie={item} isModal={true} closeModal={onClose} />
                            })
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
