import { useParams } from "react-router-dom"
import '../Componentes/Router.css'

const Palabra = () => {

	const { valor } = useParams();
	const { color, backgroundColor } = useParams();

	console.log(color);
	console.log(backgroundColor);

	return (

		<div className="resultado" style={{ color: (color), backgroundColor: (backgroundColor) }}>
			La palabra es: {valor}
		</div>
	)
}

export default Palabra