import { getOwnPropertyDescriptors } from 'immer/dist/internal';
import React from 'react';
import { useSelector} from 'react-redux';

export function Placas(){
    const allPlacas = useSelector(state => state.placa);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(allPlacas())
    // }, [])
    const placas = (param) => {
        for(let i in allPlacas){
            if(allPlacas[i] === )
            let result = allPlacas[i];
            return result;
        };
    };
    return (
        <div className="App">
        {
            allPlacas.map((item) => {
            return(
                <div>
                <h2>{item.placa1}</h2>
                <h2>{item.placa2}</h2>
                </div>
            )
            })
        }
        <button>
            click
        </button>
        </div>
    );
};