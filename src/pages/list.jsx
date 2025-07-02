import React from "react";
import ListCard from "../components/listCard";
function List() {
    return (
        <>
            <div className="inner-wrap">
                <section className="section-space">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="row row-srch">
                                    <div className="col-md-5">
                                        <h2 class="main-heading">Search List</h2>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><span>Search Result By:</span></li>
                                            <li className="list-inline-item">A & M Johnson Construction</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <ListCard />
                                <ListCard />
                                <ListCard />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default List;
