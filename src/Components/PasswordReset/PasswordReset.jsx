import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const PasswordReset = () => {
    const {resetPassword} = useContext(AuthContext);
    const [email,setEmail] = useState('');

    const handleSubmit = ()=>{
        resetPassword(email)
        .then(res =>{
            console.log(res)
        })
    }
    return (
        <div>
            <label className="label">
                <a onClick={() => document.getElementById('my_modal_2').showModal()} className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            <dialog id="my_modal_2" className="modal">
                <div onChange={(e)=> setEmail(e.target.value)} className="modal-box">
                    <input type="text" />
                    <button onClick={handleSubmit}  className="btn">Submit</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default PasswordReset;