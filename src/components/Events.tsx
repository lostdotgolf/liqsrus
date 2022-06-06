import EventCard from "./EventCard";

export default function Events() {
  return (
    <main className="mb-auto">
      <EventCard
        name="permissionless"
        date="1/1/11"
        description="something something something we're all going to 0"
        tags="irl"
      />
      <EventCard
        name="NFT NYC"
        date="6/20/22"
        description="we are actually going to 0"
        tags="irl"
      />
    </main>
  );
}
