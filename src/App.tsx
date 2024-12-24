import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import routes from "./Routes";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: true,
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={client}>
        <Router>
          <main className="h-screen bg-stone-900">
            <Routes>
              {routes.map((route:any, i:number) => (
                <Route path={route.path} key={i} element={<route.element />}>
                  {route.children.map((childRoute:any, i:number) => (
                    <Route
                      path={childRoute.path}
                      element={<childRoute.element />}
                      key={i}
                    />
                  ))}
                </Route>
              ))}
            </Routes>
          </main>
        </Router>
    </QueryClientProvider>
  );
};

export default App;
