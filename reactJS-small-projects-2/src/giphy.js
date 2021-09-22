import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

const KEY = 'bis3bmgI85aNWRtMZdfUc7tWFnw3SHtw';
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}`;
const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${KEY}`

const Giphy = () => {
    const [input, setInput] = useState('');
    const [gifs, setGifs] = useState([]);

    const search = () => {
        setGifs([]);

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        axios.get(`${URL}&q=${input}`, {
                cancelToken: source.token
            })
            .then((response) => {
                console.log(response.data)
                const { data }  = response.data;
                let urls = data.map((item) => item.images['fixed_width'].url)
                setGifs(urls);
            })
            .catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                console.log('Request canceled', thrown.message);
                } else {
                // handle error
                }
            });
    
        return () => {
            source.cancel();
        }
    }

    useEffect(search, [input])

    useEffect(() => {
        axios.get(`${TRENDING_URL}`)
            .then((response) => {
            console.log(response.data)
            const { data }  = response.data;
            let urls = data.map((item) => item.images['fixed_width'].url)
            setGifs([]);
            setGifs(urls);
            })
    }, [])

    return (
        <div className="App">
            <div>
                <input 
                    value={input} 
                    onChange={ (event) => {setInput(event.target.value)} } 
                    onKeyUp={ (event) => {
                        if (event.key === "Enter") {
                            search();
                        }
                    }}
                />
                <button onClick={() => search() }> search </button>
            </div>
            <div>
                {
                    gifs.map((url, index) => (
                        <img src={url} key={index} alt='GIF'/>
                    ))
                }
            </div>
        </div>
    )
}

export default Giphy