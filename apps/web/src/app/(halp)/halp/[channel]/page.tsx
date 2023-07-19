function Page({ params }: { params: { channel: string } }) {
  return (
    <div>
      <p>{params.channel}</p>
    </div>
  );
}

export default Page;
