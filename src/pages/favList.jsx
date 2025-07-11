import React from "react";
import ListCard from "../components/listCard";
function FavoriteList() {
    return (
        <>
            <div className="inner-wrap">
                <section className="section-space">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="row row-srch">
                                    <div className="col-md-5">
                                        <h2 class="main-heading">Bookmarked List</h2>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <ListCard initiallyBookmarked={true} />
                                <ListCard initiallyBookmarked={true} />
                                <ListCard initiallyBookmarked={true} />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default FavoriteList;
