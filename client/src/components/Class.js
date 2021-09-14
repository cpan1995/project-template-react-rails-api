function Class({classs}) {
    return(
        <div>
             <h2 style={{ color: 'yellow', fontWeight: 'bold' }}>{classs.subject} </h2>
            <p style = {{color: 'yellow', fontWeight: 'bold' }}>{classs.grade}</p>
            <p style = {{color: 'yellow', fontWeight: 'bold' }}>{classs.homeworks}</p>
            {classs.user.is_teacher === true ? <button>Edit Grade</button> : <> </> }
        </div>
    )
}

export default Class