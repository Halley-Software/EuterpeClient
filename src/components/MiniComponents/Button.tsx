import "../../assets/resources/icons/fontawesome/css/all.min.css"
import "../../assets/css/musicCard/Button.css"

function Button({ButtonType}: any) {
  return (
    <button className="Circled-Button">
      {ButtonType === "left-Arrow" ? () => <i className=""></i> : () => <i></i>}
    </button>
  )
}

export default Button