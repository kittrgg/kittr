export function Sidebar({ params }: any) {
  return (
    <div>
      <p>Sidebar</p>
      <p>{JSON.stringify(params, null, 2)}</p>
    </div>
  );
}

export default Sidebar;
