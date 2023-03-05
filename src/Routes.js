import { Route, Routes } from "react-router-dom";
import linkRoutes from "./routeConstant";

// Home
import Home from "./components/Home/Home";

// Week 7
import WeekSeven from "./components/WeekSeven/WeekSeven";
import WeekSevenThursday from "./components/WeekSeven/Thursday/Thursday";
import WkSevenThursEx1 from "./components/WeekSeven/Thursday/EventsCondRendering/EventsRendering";
import WkSevenThursEx2 from "./components/WeekSeven/Thursday/LiftingState/LiftingStateUp";
import WeekSevenFriday from "./components/WeekSeven/Friday/Friday";
import WkSevenFriEx1 from "./components/WeekSeven/Friday/ReactRouter/ReactRouter";

// Week 8
import WeekEight from "./components/WeekEight/WeekEight";
import WeekEightMonday from "./components/WeekEight/Monday/Monday";
import WeekEightTuesday from "./components/WeekEight/Tuesday/Tuesday";
import WeekEightWednesday from "./components/WeekEight/Wednesday/Wednesday";
import WeekEightThursday from "./components/WeekEight/Thursday/Thursday";
import WeekEightFriday from "./components/WeekEight/Friday/Friday";

// No Match
import NoMatch from "./components/NoMatch";


const RoutesStore = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* Week 7 Routes */}
			<Route path="/week-seven/*" element={<WeekSeven linkRoutes={linkRoutes} />} />
			<Route path="/week-seven/thursday" element={<WeekSevenThursday linkRoutes={linkRoutes} />}>
				<Route path="/week-seven/thursday/" element={<WeekSevenThursday />} />
				<Route path="exercise1" element={<WkSevenThursEx1 />} />
				<Route path="exercise2" element={<WkSevenThursEx2 />} />
			</Route>
			<Route path="/week-seven/friday" element={<WeekSevenFriday linkRoutes={linkRoutes} />} >
				<Route path="/week-seven/friday/" element={<WeekSevenFriday />} />
				<Route path="exercise1" element={<WkSevenFriEx1 />} />
			</Route>
			{/* Week 8 Routes */}
			<Route path="/week-eight/*" element={<WeekEight linkRoutes={linkRoutes} />} />
			<Route path="/week-eight/monday" element={<WeekEightMonday linkRoutes={linkRoutes} />}></Route>
			<Route path="/week-eight/tuesday" element={<WeekEightTuesday linkRoutes={linkRoutes} />}></Route>
			<Route path="/week-eight/wednesday" element={<WeekEightWednesday linkRoutes={linkRoutes} />}></Route>
			<Route path="/week-eight/thursday" element={<WeekEightThursday linkRoutes={linkRoutes} />}></Route>
			<Route path="/week-eight/friday" element={<WeekEightFriday linkRoutes={linkRoutes} />}></Route>

			<Route path="*" element={<NoMatch />} />

		</Routes>
	);
};

export default RoutesStore;
