import {useState} from 'react'

export default function Choice(props){

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      if(!props.submitted){
        setIsHovering(true);
      }
    };
  
    const handleMouseLeave = () => {
      if(!props.submitted){
        setIsHovering(false);
      }
    };

    function getBackgroundStyle(){
      let backgroundColor =''
      if(props.submitted){
        if(props.correctAnswer){
          backgroundColor ='rgb(133, 208, 156)'
        }else{
          if(props.choosed){
            backgroundColor ='rgb(231, 211, 216)'
          }else{
            backgroundColor =''
          }
        }
      }else{
        if(props.choosed){
          backgroundColor ='#D6DBF5'
        }else{
          if(isHovering){
            backgroundColor ='aliceblue'
          }else{
            backgroundColor =''
          }
          
        }
      }
      return backgroundColor
    }
  
    const styles = {
        backgroundColor: getBackgroundStyle(),   
    }
    
    return(
        <div style={styles} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={()=>props.chooseAnswer(props.idChoice, props.id)}
        className="choice">{props.answer}</div>
    )

    
    
}

/*
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave} */