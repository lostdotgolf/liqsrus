interface Event {
  name: String;
  date: String;
  description: String;
  tags: String;
}

export default function EventCard(props: Event) {
  return (
    <main className="flex flex-col m-3 items-center">
      <div className="text-center mt-9">{props.name}</div>
      <div className="text-center ">{props.date}</div>
      <div className="">{props.description}</div>
      <div>{props.tags}</div>
    </main>
  );
}
