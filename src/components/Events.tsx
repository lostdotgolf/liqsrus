import EventCard from "./EventCard";

export default function Events() {
  return (
    <main className="space-y-3">
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
      <EventCard
        name="dcentralcon"
        date="5/10/22"
        description="this one always blows up"
        tags="irl"
      />
      <EventCard
        name="art basel"
        date="12/1/22"
        description="mia baby"
        tags="irl"
      />
      <EventCard
        name="art basel"
        date="12/1/22"
        description="mia baby"
        tags="irl"
      />
    </main>
  );
}
