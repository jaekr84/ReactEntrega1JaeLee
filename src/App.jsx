import './App.css'
import Product from './Product'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Contador from './Contador'


function App() {

  return (
    
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='BIENVENIDOS A LA TIENDA ONLINE DE LALA SHOP'/>
      <Contador/>
      <Product 
      img='https://dcdn.mitiendanube.com/stores/001/096/476/products/img_4132-a44d81db78a7da755317009231411211-640-0.webp'
      title='Vestido Scarlett'
      description='Vestido de foil con tiras cola de raton'
      price='15.600'
      />

      <Product 
      img='https://dcdn.mitiendanube.com/stores/001/096/476/products/img_4118-3aa267037d74b2fc0817009252820062-640-0.webp'
      title='Vestido DuaLipa'
      description='Vestido de Engomado tipo corset'
      price='19.600'
      />

      <Product 
      img='https://dcdn.mitiendanube.com/stores/001/096/476/products/img_4123-8129d9e53e1231077c17009252430482-640-0.webp'
      title='Vestido Jonas'
      description='Vestido de engomado con tiras'
      price='19.600'
      />
      
    </div>
  )
}

export default App
