import React, {useState} from 'react'
import { puntuarPedido } from "../../api/pedidoServices"
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom"
import { Loading } from '../loading/Loading';

export const Puntuar = (props) => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [state, setstate] = useState([])
    const [comentario, setComent] = useState(" ")
    const onValueChange = (event) => {
        setstate({
          selectedOption: event.target.value
        });
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.selectedOption)
        setIsLoading(true)
        puntuarPedido(props.idPedido,{ puntuacion: state.selectedOption, comentario: comentario })
        .then(function (response) {
            setIsLoading(false)
            if (response.status===200){
            toast.success("Pedido puntuado")
            //history.push(`/pedidosRealizados`);
            history.go(0)
            }
        }).catch(function (response) {
            //handle error
            toast.error("no se pudo puntuar")
            console.log(response);
        }).finally(
            setIsLoading(false)
        )
    }
    function handleComent(evt) {
        setComent(evt.target.value)

    }
    return (
        isLoading?<Loading/>:
        <div>
            <form  class="row gx-1" onSubmit={handleSubmit} style={{display:"flex", flexDirection:'row', justifyContent:"center"}} >
                <div className="col-auto mb-3 ">
                    <p>Puntaje:  </p>
                </div>
                <div className="col-auto mb-3 ">
                    <div className="form-check-inline ">
                        <input
                            type="radio"
                            name="picked"
                            className="form-check-input"
                            id="1"
                            value={1}
                            onChange={onValueChange}
                        />
                        <label htmlFor="1">1</label>
                    </div>

                    <div className="form-check-inline ">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="picked"
                            id="2"
                            value={2}
                            onChange={onValueChange}
                        />
                        <label htmlFor="2">2</label>
                    </div>

                    <div className="form-check-inline ">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="picked"
                            id="3"
                            value={3}
                            onChange={onValueChange}
                        />
                        <label htmlFor="3">3</label>
                    </div>

                    <div className="form-check-inline ">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="picked"
                            id="4"
                            value={4}
                            onChange={onValueChange}
                        />
                        <label htmlFor="4">4</label>
                    </div>

                    <div className="form-check-inline ">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="picked"
                            id="5"
                            value={5}
                            onChange={onValueChange}
                        />
                        <label htmlFor="5">5</label>
                    </div>
               </div>
               <div className="row">
                <div className="col-6 mb-3 ">
                    <div class="form-floating ">
                        <textarea class="form-control" placeholder="Deja tu comentario aquí" id="comment" onChange={handleComent}></textarea>
                        <label for="comment">Comentario (Opcional)  </label>
                    </div>
                
                 </div>
              </div>
              <button type="submit" className="btn btn-success mt-3" style={{marginLeft:10}}>Guardar</button> </form>
        </div>
    )
}
