import { useParams } from "react-router-dom";
import "./AsistenteDetails.scss"

const AsistenteDetails = () => {

const { id } = useParams();

console.log(id);

return <div>AsistenteDetails</div>;

};

export default AsistenteDetails;
