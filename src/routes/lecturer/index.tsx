import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LecturerRoute = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<></>}>

                    <Route path="student">
                        <Route
                            path=""
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

                    <Route path="lecturer">
                        <Route
                            path=""
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

                    <Route path="admin">
                        <Route
                            path=""
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
                            path=""
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
                        <Route
                            path="update/:id"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                    </Route>

                    <Route path="question">
                        <Route
                            path=""
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                        <Route
                            path="create"
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
                        <Route
                            path="update/:id"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                    </Route>

                    <Route path="department">
                        <Route
                            path=""
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

                    <Route path="lecture">
                        <Route
                            path=""
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                        <Route
                            path="create"
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
                        <Route
                            path="update/:id"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                    </Route>

                    <Route path="document">
                        <Route
                            path=""
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                        <Route
                            path="create"
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
                        <Route
                            path="update/:id"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                    </Route>

                    <Route path="quiz">
                        <Route
                            path=""
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                        <Route
                            path="create"
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
                        <Route
                            path="update/:id"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {/* <MaterialList /> */}
                                </Suspense>
                            }
                        />
                    </Route>

                    <Route path="attempt">
                        <Route
                            path=""
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
                        <Route
                            path="update/:id"
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
    );
};

export default LecturerRoute;
