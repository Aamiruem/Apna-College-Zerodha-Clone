
import React from "react";

function Navbar() {
    return (
        <nav
            class="navbar navbar-expand-lg border-bottom"
            style={{ backgroundColor: "#FFF" }}
        >
            <div class="container p-2">
                <a class="navbar-brand" href="./home">
                    <img
                        src="media/logo.svg"
                        style={{ width: "25%" }}
                        alt="Logo"
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            
                            <li class="nav-item">
                                <button class="nav-link active" style={{ background: "none", border: "none", padding: 0 }}>
                                    About
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link active" style={{ background: "none", border: "none", padding: 0 }}>
                                    Product
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link active" style={{ background: "none", border: "none", padding: 0 }}>
                                    Pricing
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link active" style={{ background: "none", border: "none", padding: 0 }}>
                                    Support
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
