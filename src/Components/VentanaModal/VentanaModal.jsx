import './VentanaModal.css'

export const VentanaModal = ({selected}) => {

  
  return (
    <article className="modal is-open">
        <div className="modal-container">
          <button className="modal-close">X</button>
          <p>{selected}</p>
          <img src={require('../../images/softVentana.png')} alt="" />
        </div>
    </article>
  )
}
