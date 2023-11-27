import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const GuestRoute = () => {
    return(
        <>
            <Routes>
                <Route path="" element={<></>}>
                    <Route path="ticket">
                        <Route
                            path=""
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                    </Route>

                    <Route path="student">
                        <Route
                            path=""
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                    </Route>

                    <Route path="lecturer">
                        <Route
                            path="manage"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />

                    </Route>

                    <Route path="admin">
                        <Route
                            path="manage"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                        <Route
                            path="view/:id"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                    </Route>

                    <Route path="course">
                        <Route
                            path="manage"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />

                    </Route>

                    <Route path="question">
                        <Route
                            path="manage"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />

                    </Route>

                    <Route path="department">
                        <Route
                            path="manage"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />

                    </Route>

                    <Route path="lecture">
                        <Route
                            path="manage"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />

                    </Route>

                    <Route path="document">
                        <Route
                            path="manage"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />

                    </Route>

                    <Route path="quiz">
                        <Route
                            path="manage"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />

                    </Route>

                    <Route path="attempt">
                        <Route
                            path="manage"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />

                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default GuestRoute;