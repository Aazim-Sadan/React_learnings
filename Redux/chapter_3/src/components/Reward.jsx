import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducers/reward";


function Reward() {

    const dispatch = useDispatch();
    const points = useSelector(state => state.reward.points);


    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>Reward Component</b>
                </h4>
                <h3>Total point : {points}</h3>
                <button onClick={() => dispatch(increment())}>Increment +</button>
            </div>
        </div>
    );
}

export default Reward;