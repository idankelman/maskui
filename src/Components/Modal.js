import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";


function Modal(params) {


    function triggerClose() {
        params.trigger();
    }

    return (
        <div className="Modal">
            <div className="Wrapper">
                <div id="simple-modal" className="modal fade" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" onClick={triggerClose} >
                                    &times;
                                </button>
                                <h4 className="modal-title">Search Apperances</h4>
                            </div>
                            <div className="modal-body">
                                {params.data.map(item => {
                                    return (
                                        <div className="Item" key={item.id}>
                                            <NavLink to={item.path}>
                                                <div className="element">
                                                    <div className="Image">
                                                        <img src={item.image} alt="image" />
                                                    </div>
                                                    <div className="Name">
                                                        {item.name}
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;
