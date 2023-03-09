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
import WkEightMonEx1 from "./components/WeekEight/Monday/ToDo/ToDoMain";
import WkEightMonEx2 from "./components/WeekEight/Monday/ArvoClass/ShoppingListIndex";

import WeekEightTuesday from "./components/WeekEight/Tuesday/Tuesday";
import WkEightTuesEx1 from "./components/WeekEight/Tuesday/MaterialUI/MaterialUI";

import WeekEightWednesday from "./components/WeekEight/Wednesday/Wednesday";
import WkEightWedEx1 from "./components/WeekEight/Wednesday/ShowTell";

import WeekEightThursday from "./components/WeekEight/Thursday/Thursday";
import WkEightThursEx1 from "./components/WeekEight/Thursday/NodeJS/NodeJS";
import WkEightThursEx2 from "./components/WeekEight/Thursday/TheWeatherAPI/TheWeatherAPI";

import WeekEightFriday from "./components/WeekEight/Friday/Friday";

// No Match
import NoMatch from "./components/NoMatch";


const RoutesStore = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* Week 7 Routes */}
			<Route path="/week-seven/*" element={<WeekSeven linkRoutes={linkRoutes} />} />
			{/* Week 7 Thursday Routes */}
			<Route path="/week-seven/thursday" element={<WeekSevenThursday linkRoutes={linkRoutes} />}>
				<Route path="/week-seven/thursday/" element={<WeekSevenThursday />} />
				<Route path="exercise1" element={<WkSevenThursEx1 />} />
				<Route path="exercise2" element={<WkSevenThursEx2 />} />
			</Route>
			{/* Week 7 Friday Routes */}
			<Route path="/week-seven/friday" element={<WeekSevenFriday linkRoutes={linkRoutes} />} >
				<Route path="/week-seven/friday/" element={<WeekSevenFriday />} />
				<Route path="exercise1" element={<WkSevenFriEx1 />} />
			</Route>
			{/* Week 8 Routes */}
			<Route path="/week-eight/*" element={<WeekEight linkRoutes={linkRoutes} />} />
			{/* Week 8 Monday Routes */}
			<Route path="/week-eight/monday" element={<WeekEightMonday linkRoutes={linkRoutes} />}>
				<Route path="/week-eight/monday/" element={<WeekEightMonday />} />
				<Route path="exercise1" element={<WkEightMonEx1 />} />
				<Route path="exercise2" element={<WkEightMonEx2 />} />
			</Route>
			{/* Week 8 Tuesday Routes */}
			<Route path="/week-eight/tuesday" element={<WeekEightTuesday linkRoutes={linkRoutes} />}>
				<Route path="/week-eight/tuesday/" element={<WeekEightTuesday />} />
				<Route path="exercise1" element={<WkEightTuesEx1 />} />
			</Route>
			{/* Week 8 Wednesday Routes */}
			<Route path="/week-eight/wednesday" element={<WeekEightWednesday linkRoutes={linkRoutes} />}>
				<Route path="/week-eight/wednesday/" element={<WeekEightWednesday />} />
				<Route path="exercise1" element={<WkEightWedEx1 />} />
			</Route>
			{/* Week 8 Thursday Routes */}
			<Route path="/week-eight/thursday" element={<WeekEightThursday linkRoutes={linkRoutes} />}>
				<Route path="/week-eight/thursday/" element={<WeekEightThursday />} />
				<Route path="exercise1" element={<WkEightThursEx1 />} />
				<Route path="exercise2" element={<WkEightThursEx2 />} />
			</Route>
			{/* Week 8 Friday Routes */}
			<Route path="/week-eight/friday" element={<WeekEightFriday linkRoutes={linkRoutes} />}></Route>

			<Route path="*" element={<NoMatch />} />

		</Routes>
	);
};

export default RoutesStore;
