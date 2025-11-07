import { useState } from "react";
import SaveUserModal from "./components/CreateUserModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Table from "./components/Table";

function App() {
    const [modal, setModal] = useState(false);

    const createClickHandler = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Table />

                    <button
                        className="btn-add btn"
                        onClick={createClickHandler}
                    >
                        Add new user
                    </button>

                    <Pagination />
                </section>

                {modal && <SaveUserModal closeModal={closeModal} />}
            </main>
            <Footer />
        </>
    );
}

export default App;
