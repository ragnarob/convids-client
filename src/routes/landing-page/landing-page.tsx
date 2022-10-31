import { NavLink } from "react-router-dom";
import FeaturedVideo from "../../components/featured-video";
import RecentEvents from "../../components/recent-events";
import RecentVideos from "../../components/recent-videos";

export default function LandingPage({}) {
  return (
    <section>
      <h1>Furry Convention Videos!</h1>
      <div>
        <NavLink to="/video-list">All videos</NavLink>
        <NavLink to="/event-list">All events</NavLink>
        <NavLink to="/maker-list">All makers</NavLink>
      </div>
      <FeaturedVideo />
      <RecentVideos />
      <RecentEvents />
    </section>
  );
}
