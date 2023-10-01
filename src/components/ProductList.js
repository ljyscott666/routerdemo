import  {  useSearchParams , useLocation} from "react-router-dom"

//  console.log(searchParams.get("keyword"));



export const ProductList = () => {
   const [searchParams] =  useSearchParams();
   const location = useLocation();
    
   console.log(location)

  return (
    <div className="component">ProductList</div>
  )
}
