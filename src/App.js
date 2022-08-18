import Layout from "./components/Layout/Layout";
import{useEffect} from 'react'

function App({result}) {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [result])
  return (
    <div>
      <Layout/>
    </div>
  );
}

export default App;
