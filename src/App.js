import React from 'react'
import'./App.css'

function App({imgUrl,name,userPic,postText}) {
  return (
    <div className = "postContainer">
      <div className = "head">
      
        <div  > 
          </div>
        <br/>
        <div className ="uname" >
           <img className = "propic" alt= "userPic" src = {userPic}></img>
        
        </div>
      <div className ="uname nm" >
  <strong><span>{name}</span></strong>  <br></br>
        <span> <i class="fas fa-users userIcon"></i>12 Dec 5:51 PM</span>
        </div>
        <div className ="moreBtn" > <i class="fas fa-ellipsis-h" ></i></div>
      </div>
  <div className = "postTxt">{postText}</div>
      <div>
     <img width = "400px" height = "300px" alt= "postimg" src = {imgUrl}></img>
      </div>
      <div className= "lines"></div>
      <div className = "likeCommShare">
       <span className = "like"> <i  class="far fa-thumbs-up">  </i> <span className ="commanTxt">Like</span></span> 
       <span  className = "comment" ><i class="far fa-comment-alt"></i><span className ="commanTxt">Comment</span></span>
       <span className = "share"><i  class="fas fa-share"> </i><span className ="commanTxt"></span>Share</span>
      </div>
      <div className= "lines"></div>
    </div>
  )
}

export default App

