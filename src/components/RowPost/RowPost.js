import React, { useState,useEffect } from 'react'
import './RowPost.css'
import { imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlid,setUrlId]= useState('')
  useEffect(() =>{

    axios.get(props.url).then(response =>{
      console.log(response.data.results)
      setMovies (response.data.results.sort(function(a, b) { return 0.5 - Math.random() }))
    })
   

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  };
  const handleMovie = (id) =>{
     console.log(id)
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results.length !== 0) {

        setUrlId(response.data.results[0])
      }
      else {
        console.log('not avaliable')
      }
     })
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        
        {movies.map((obj)=>

<img  onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster':'poster'} src={`${obj ? imageUrl+obj.backdrop_path :'' }`}/>

        )}
        
        
        
    </div>
{ urlid && <Youtube opts={opts} videoId={urlid.key}  />}
    </div>
  )
}

export default RowPost