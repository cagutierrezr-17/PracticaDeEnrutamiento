import { useParams } from "react-router-dom"
import Palabra from "./Palabra";
import '../Componentes/Router.css'


const Numero = () => {

	const { valor } = useParams();
	const esNumero = !isNaN(valor);


	return (
		<div>
			{esNumero ? (
				<div className="resultado">El número es: {valor}</div>
			) : (
				<div>
					<Palabra />
				</div>
			)}
		</div>
	)
		;
}


export default Numero;