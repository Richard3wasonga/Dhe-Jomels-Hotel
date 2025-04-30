import React,{useEffect,useState} from 'react'
import FilterExchange from './components/FilterExchange'

const App = () => {
  const [menuInfo, setmenuInfo] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const fetchMenu = async () => {
      try{
        const response = await fetch('https://jomels-menu.vercel.app/menu');
        const data = await response.json();
        setmenuInfo(data);
        
        console.log(data)

      }catch (error){
        console.error('Oops error fetching menu:', error)
      }finally{
        setloading(false)
      }

    }
    fetchMenu()
  }, [])
 

  if(loading) return <div>Loading menu...</div>
  
  return (
    <div>
      <FilterExchange  menu={menuInfo}/>
    </div>
  )
}

export default App