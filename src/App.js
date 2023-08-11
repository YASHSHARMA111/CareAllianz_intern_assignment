import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Header } from "./Components/Header";
import { Providers } from "./Providers";
import { AddTask } from "./Pages/AddTask";
import { Task } from "./Pages/Task";
import { EditTask } from "./Pages/EditTask";
import { Tasks } from "./Pages/Tasks";
import { Ideas } from "./Pages/Ideas";
import { Contacts } from "./Pages/Contacts";
import Search from "./Pages/Search";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen w-full relative flex">
            <Header />
            <div className="w-full">{children}</div>
        </div>
    );
};

const wrap = (Element) => {
    return <Layout>{Element}</Layout>;
};

export default function App() {
    return (
        <div className="App">
            <Providers>
                <Routes>
                    <Route path="/" element={wrap(<Home />)} />
                    <Route path="/tasks" element={wrap(<Tasks />)} />
                    <Route path="/ideas" element={wrap(<Ideas />)} />
                    <Route path="/contacts" element={wrap(<Contacts />)} />
                    <Route path="/add" element={wrap(<AddTask />)} />
                    <Route path="/task/:taskId" element={wrap(<Task />)} />
                    <Route path="/edit/:taskId" element={wrap(<EditTask />)} />
                    <Route
                        path="/search/:searchTerm"
                        element={wrap(<Search />)}
                    />
                </Routes>
            </Providers>
        </div>
    );
}
