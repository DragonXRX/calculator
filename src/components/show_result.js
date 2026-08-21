

function ShowResult ({inputHere, resultFinal}) {
     
    // error - you cant converte info from parent to child
    
    return (
     <div className='show_result'>
        <p className='inputHere'>{inputHere}</p>
        <p className='resultHere'>{resultFinal}</p>
    </div>
    )
}

export default ShowResult;