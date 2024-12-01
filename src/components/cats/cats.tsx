import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {fetchCatsReload, fetchCatsRequest, fetchCatsSuccess, selectCats} from "../../store/catsSlice";
import React, { useEffect } from 'react';
import axios from 'axios';
import "./cats.css";

const Cats = (props:any) => {
    const { data, loading, error, ready } = useAppSelector(selectCats);
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
    }, [dispatch,error,ready]);

    const reloadCats = () => {
        dispatch(fetchCatsReload())
    }

    return (<div className="cats">
        { loading ? 'loading' :
          data.map( (item:any) =>
              <div className="catCard">
                  <div className="catTitle" >{item.id}</div>
                  <img style={{backgroundColor:"#d0d0d0"}} height="100" width="100" src={item.url} key={item.id} alt={item.name} />
              </div>
          )
        }
        <div>
            <button onClick={ () => reloadCats() }>NEW CATS</button>
        </div>
    </div>)
}

export default Cats;