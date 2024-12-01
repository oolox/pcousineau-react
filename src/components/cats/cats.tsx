import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {fetchCatsReload, fetchCatsRequest, fetchCatsSuccess, selectCats} from "../../store/catsSlice";
import React, { useEffect } from 'react';
import axios from 'axios';


const Cats = (props:any) => {
    const { data, loading, error,ready } = useAppSelector(selectCats);
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!ready) {
            dispatch(fetchCatsRequest());
            axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
                .then(response => {
                    dispatch(fetchCatsSuccess(response.data));
                })
                .catch(() => {
                    alert(error);
                });
        }
    }, [ready]);

    const reloadCats = () => {
        dispatch(fetchCatsReload())
    }

    return (<div>
        { loading ? 'loading' :
          data.map( (item:any) =>
              <div style={{display: "inline-block"}}>
                  <div style={{fontSize: "0.8rem"}}>{item.id}</div>
                <img height="100" width="100" src={item.url} key={item.id} alt={item.name} />
              </div>
          )
        }
        <br/>
        <button onClick={ () => reloadCats() }>NEW CATS</button>
    </div>)
}

export default Cats;