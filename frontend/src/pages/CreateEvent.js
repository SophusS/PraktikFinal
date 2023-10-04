import EventForm from "../components/EventForm";
import GoogleMapsComponent from "../components/GoogleMapsComponent";

const CreateEvent = () => {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="col-md-6">
                <h1 className="center">Skab en begivenhed</h1>
                <EventForm />
                <GoogleMapsComponent />
            </div>
        </div>
    )
}

export default CreateEvent;