import { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import './Cart.css'
import { useSelector } from 'react-redux'

export default function Cart() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const cartLength = useSelector(state => state.movies.cartArr).length || 0

    const showModal = () => {
        if (cartLength > 0)
            setIsModalOpen(true)
    }
    const closeModal = () => setIsModalOpen(false)

    // Automatically close modal if cart is emptied
    useEffect(() => {
        if (cartLength === 0) {
            setIsModalOpen(false);
        }
    }, [cartLength]);


    return (
        <div className='position-relative fs-2 ms-3 me-3'>
            <i className="bi bi-cart4" onClick={showModal}></i>
            <span className="cart-counter position-absolute translate-middle badge rounded-circle bg-danger">
                {cartLength}
            </span>
            {isModalOpen && <Modal onClose={closeModal} />}
        </div>
    )
}
