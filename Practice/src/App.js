import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Link, Outlet } from "react-router-dom";
import CheckBoxListDelete from "./components/CheckBoxListDelete";

const AppLayout = () => {
	console.log("Helo world");

	return (
		<div className="app">
			<Link to={"/listDelete"}><button className="bg-green-300">CheckBoxListDelete</button></Link>
            <Outlet/>
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
            {
                path: "/",
                element: (<div>Hello</div>),
            },
			{
				path: "/listDelete",
				element: <CheckBoxListDelete />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={appRouter} />);
