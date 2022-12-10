import Choice from "./Choice"

export default function Quiz(props){
    
    // console.log("Before shuffle")

   

    
    
    //const choicesShuffled = choices.sort((a, b) => 0.5 - Math.random());
    // console.log("After shuffle")
   

    //console.log("props"+props)
    return(
        <div className="question-group">
            <div className="question">{props.question}</div>
            <div className="choices">
                {
                    props.answers.map(function(choice){
                        return <Choice  
                                key={choice.idChoice} 
                                choosed={choice.choosed} 
                                answer={choice.answer}
                                id={props.id}  
                                idChoice={choice.idChoice}
                                chooseAnswer = {props.chooseAnswer}
                                correctAnswer = {choice.correctAnswer}
                                submitted={props.submitted}/>
                    })
                }
            </div>
            <div className="divider"></div>
        </div>
    )
} 
 //*/
