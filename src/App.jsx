import { NavLink, Routes, Route } from 'react-router-dom'
import './App.css'
import { generatePath } from './utils/generatePath'
import RoutesList from './routesList'
import LogList from './components/LogList'

function App() {

    return (
        <>
            <div className='container'>
                <header>
                    <nav>
                        {RoutesList.map((route, index) => (
                            route.header && (
                                <NavLink
                                    className={({ isActive }) => isActive ? 'nav-link-active' : ''}
                                    key={index}
                                    to={generatePath(route.name)}
                                    exact={route.exact}
                                >
                                    {route.name}
                                </NavLink>
                            )
                        ))}
                    </nav>
                </header>
                <main>
                    <Routes>
                        {RoutesList.map((_, index) => (
                            <Route key={index} path={_.path} element={_.component} />
                        ))}
                    </Routes>
                </main>
            </div>
            <LogList />
        </>
    )
}

export default App
