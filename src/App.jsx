import Footer from "./components/Footer";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Table from "./components/Table";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Table />

                    <button className="btn-add btn">Add new user</button>

                    <Pagination />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
