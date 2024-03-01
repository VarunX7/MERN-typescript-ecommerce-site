import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox(){
    return(
        <Spinner animation="border" role="Status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}