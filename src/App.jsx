import './App.css'
import {Header,Footer} from "../src/components/indexComponents"
import { AllRoutes } from './routes/AllRoutes'
import { Analytics } from "@vercel/analytics/next"
function App() 
{
 return(<>
 <Header/>
 <AllRoutes/>
 <Footer/>
 </>)
}

export default App
