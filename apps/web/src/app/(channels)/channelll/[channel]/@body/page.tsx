export function Body({ params }: any) {
  return (
    <div>
      <p>Body</p>
      <p>{JSON.stringify(params, null, 2)}</p>
    </div>
  );
}

export default Body;
