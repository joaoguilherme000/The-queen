export default function Model() {
  return (
    <>
      <model-viewer
        src="/b.glb"
        alt="Bicicleta"
        auto-rotate
        camera-controls
        ar
        style={{ width: "40%", height: "81vh" }}
      />
    </>
  );
}