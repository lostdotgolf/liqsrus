import EventCard from "./EventCard";

export default function Events() {
  return (
    <div className="space-y-5">
      <EventCard
        name="Art Basel 2021"
        to="12/3/21"
        from="12/6/21"
        description="a jolly time indeed"
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
