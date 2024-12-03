import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {fetchCatsReload, fetchCatsRequest, fetchCatsSuccess, selectCats} from "../../store/catsSlice";
import React, { useEffect } from 'react';
import axios from 'axios';
import "./cats.css";

const Cats = () => {
    const { data, loading, error, ready } = useAppSelector(selectCats);
    const [ catsAvail, setCatsAvail ] = React.useState(data);
    const dispatch = useAppDispatch()
    const [ tooltip, setTooltip ] = React.useState('none');

    useEffect(() => {
        if(!ready) {
            dispatch(fetchCatsRequest());
            axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
                .then(response => {
                    dispatch(fetchCatsSuccess(response.data));
                    setCatsAvail(response.data);
                })
                .catch(() => {
                    alert(error);
                });
        }
    }, [dispatch,error,ready]);

    const reloadCats = () => {
        dispatch(fetchCatsReload())
    }

    const shuffleCats = () => {
        let idxPool:number[] = [...new Array(10)].map((item,idx)=>idx);
        let idxShuff:number[] = [];

        const shuffle = () => {
            const rnd:number= Math.floor(Math.random()*idxPool.length);
            idxShuff.push(idxPool[rnd]);
            idxPool.splice(rnd, 1);
            (idxPool.length>0) && shuffle()
        }
        shuffle();
        setCatsAvail(idxShuff.map( (idx:number) =>  data[idx] ));
    }

    return (<div className="cats">
        {loading ? 'loading' : <div>
            <div className='catCards'>
                {
                    catsAvail.map((item: any) =>
                        <div className="catCard" key={item.id}>
                            <div className="catTitle">{item.id}</div>
                            <img style={{backgroundColor: "#d0d0d0"}} height="100" width="100" src={item.url}
                                 key={item.id}
                                 alt={item.name}/>
                        </div>
                    )
                }
            </div>
            <div className='catsControls'>
                <button
                    onMouseEnter={() => setTooltip('API fetch cats')}
                    onMouseLeave={() => setTooltip('')}
                    onClick={() => reloadCats()}>NEW CATS
                </button>
                <button
                    onMouseEnter={() => setTooltip('STATE shuffle cats')}
                    onMouseLeave={() => setTooltip('')}
                    onClick={() => shuffleCats()}>SHUFFLE
                </button>
                <div className='tooltip'>{tooltip}</div>

            </div>
        </div>}
    </div>)
}

export default Cats;