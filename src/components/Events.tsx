import EventCard from "./EventCard";

export default function Events() {
  return (
    <main className="space-y-9">
      <div className="">
        <EventCard
          name="Art Basel"
          to="12/3/21"
          from="12/6/21"
          description="0"
          tags="irl"
        />
      </div>
      <div className="">
        <EventCard
          name="NFT NYC"
          to="6/2/21"
          from="6/5/21"
          description="we are actually going to 0"
          tags="irl"
        />
      </div>
      <div className="">
        <EventCard
          name="dcentralcon"
          to="5/2/22"
          from="5/11/22"
          description="this one always blows up"
          tags="irl"
        />
      </div>
      <div className="">
        <EventCard
          name="art basel"
          to="4/31/22"
          from="5/3/22"
          description="mia baby"
          tags="irl"
        />
      </div>
    </main>
  );
}
