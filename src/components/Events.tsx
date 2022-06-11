import EventCard from "./EventCard";

export default function Events() {
  return (
    <div className="space-y-5">
      <EventCard
        name="Art Basel"
        to="12/3/21"
        from="12/6/21"
        description="a jolly time indeed"
        tags="irl"
      />

      <EventCard
        name="NFT NYC"
        to="6/2/21"
        from="6/5/21"
        description="we are actually going to 0"
        tags="irl"
      />

      <EventCard
        name="dcentralcon"
        to="5/2/22"
        from="5/11/22"
        description="this one always blows up"
        tags="irl"
      />

      <EventCard
        name="art basel"
        to="4/31/22"
        from="5/3/22"
        description="mia baby"
        tags="irl"
      />

      <EventCard
        name="sxsw"
        to="3/25/22"
        from="4/1/22"
        description="austin tx"
        tags="irl"
      />
      <EventCard
        name="Consensus"
        to="6/9/22"
        from="6/11/22"
        description="austin tx"
        tags="irl"
      />
    </div>
  );
}
