

const HideCompleted = ({onHideCompleted}) => {
    return(
        <div>
         <input type="checkbox"
                onChange={onHideCompleted} /> 
         <span>Hide Completed </span>
        </div>
    )
}

export default HideCompleted