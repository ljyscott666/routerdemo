import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/logo.png"


export const Header = () => {
  
  //<Link to="/contact">Contact</Link>  等价于 《a href="/cpmtact"》  在react-router里面用 link to 来做链接跳转  route用来管理组件内容 link用来管理组件跳转
  //这这个例子里面 我们先render调试header组件  里面有link 先根据link里面找我们需要render的组件 然后我们match到这个组件 再让这个matched组件render 
  //link跟e -tag  也就是herf 是一个样的 但是不会刷新整个页面而是 根据规则匹配对应的组件 这样使性能极大的提升了
 // <NavLink to="/"  className="link" end>Home</NavLink> navlink是每次选中就会变成 link active 激活这个类 但是由于模糊匹配 每一次都有/ 所以每次home 都会被active
 //end 就是用来做精准匹配的 exact才可以active
  
  return (
   <header>
     <Link to="/" className="logo">
      <img src={Logo} alt="Route Logo" ></img>
      <span>Routemate</span>
     </Link>
     <NavLink className="navigation">
        <NavLink to="/"  className="link" end>Home</NavLink>
        <NavLink to="/products" className="link">Products</NavLink>
        <Link to="/contact"  className="link">Contact</Link>
      
     </NavLink>

   </header>
  )
}
