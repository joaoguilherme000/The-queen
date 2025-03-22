export default function Model() {
  return (
    <>
    <div style={{ width: '40%', height: '81vh' }} dangerouslySetInnerHTML={{
    __html: `<model-viewer src="/b.glb" alt="Bicicleta" auto-rotate camera-controls style="width: 100%; height: 100%;"></model-viewer>`
  }} />
    </>
  );
}