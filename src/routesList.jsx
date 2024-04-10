import Dragons from "./pages/Dragons"
import Home from "./pages/Home"
import Knights from "./pages/Knights"
import Page404 from "./pages/Errors/Page404"

const RoutesList = [
    { path: '/', component: <Home />, name: "Home", header: true },
    { path: '/dragons', component: <Dragons />, name: "Dragons", header: true },
    { path: '/knights', component: <Knights />, name: "Knights", header: true },
    { path: '*', component: <Page404 />, name: "Error404", header: false },
]

export default RoutesList