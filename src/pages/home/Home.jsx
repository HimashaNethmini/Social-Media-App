import "./home.scss"
import Stories from "../../component/stories/Stories";
import Posts from "../../component/posts/Posts";

const home = () => {
  return (
    <div className ="home">
      <Stories/>
      <Posts/>
      
    </div>
  )
}

export default home
