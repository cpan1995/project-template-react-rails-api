function Student({student}) {
    return(
        <div>
            <p>{student.first_name} {student.last_name}</p>
            <button>Edit Grade</button>
        </div>
    )
}

export default Student