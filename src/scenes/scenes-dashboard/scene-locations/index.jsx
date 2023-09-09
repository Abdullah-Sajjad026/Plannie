import { Button } from "reactstrap";
import { dummyLocations } from "../../../data/dummy-locations";
import LocationItem from "../../../components/item-location";

export default function LocationsScene() {
  return (
    <div>
      <Button color="" onClick={() => alert("Feature Under Construction")}>
        + Check In
      </Button>
      <div className="mt-3">
        <h6 className="fw-bold">Current Location</h6>
        <div className="d-flex flex-column gap-3">
          {dummyLocations
            .filter((l) => l.status === "current")
            .map((l) => (
              <div key={l.id}>
                <LocationItem {...l} />
              </div>
            ))}
        </div>
      </div>

      <div className="mt-3">
        <h6 className="fw-bold">Past Locations</h6>
        <div className="d-flex flex-column gap-3">
          {dummyLocations
            .filter((l) => l.status === "past")
            .map((l) => (
              <div key={l.id}>
                <LocationItem {...l} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
