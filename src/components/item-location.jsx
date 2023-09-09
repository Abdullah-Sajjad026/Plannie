export default function LocationItem({ id, address, coordinates, status }) {
  return (
    <div className="d-flex gap-2">
      <div className="d-flex flex-column gap-2">
        <h6 className="mb-0 fw-medium">{address}</h6>
        <span className="text-muted" style={{ fontSize: "12px" }}>
          {coordinates}
        </span>
      </div>
    </div>
  );
}
