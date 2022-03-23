import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";


function Modal(params) {

    return (
        <div className="Modal">
            <div className="Wrapper">
                <div id="simple-modal" class="modal fade" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" onClick={params.toggle} >
                                    &times;
                                </button>
                                <h4 class="modal-title">Search Apperances</h4>
                            </div>
                            <div class="modal-body">
                                {params.data.map(item => {
                                    return (
                                        <div className="Item">
                                            <NavLink to={`/appearance/${item.id}`}>
                                                <div className="Image">
                                                    <img src={item.image} alt="image" />
                                                </div>
                                                <div className="Name">
                                                    {item.name}
                                                </div>
                                            </NavLink>
                                        </div>
                                    )
                                })}                           
                                {/* <ng-content></ng-content> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;
