import React from "react";

const Modal = ({ openModal }) => {
    return (
        <dialog
            id="my_modal_3"
            className="modal absolute overflow-auto h-auto bg-transparent justify-end items-start flex-1"
        >
            <div className="modal-box w-full">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <p className="py-4">{openModal}</p>
            </div>
        </dialog>
    );
};

export default Modal;
