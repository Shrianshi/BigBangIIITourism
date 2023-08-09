import React, { useEffect, useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import Footer from "./Footer";


const Agents = () => {
    const [Agents, setAgents] = useState([]);
    const [clickedButtonId, setClickedButtonId] = useState(null);
    const [clickedButtonStatus, setClickedButtonStatus] = useState(null);

    useEffect(() => {
        fetchAgents();
    }, []);

    const fetchAgents = async () => {
        try {
            let jwttoken = sessionStorage.getItem("jwttoken");
            const response = await fetch("https://localhost:7187/api/User", {
                headers: {
                    Authorization: "bearer " + jwttoken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setAgents(data);
            } else {
                console.error("Error fetching agents:", response.statusText);
                window.alert("Unauthorized");
            }
        } catch (error) {
            console.error("Error fetching agents:", error);
        }
    };

    // Update
    const updateTeacher = async (id, updatedData) => {
        try {
            let jwttoken = sessionStorage.getItem("jwttoken");
            const response = await fetch(
                `https://localhost:7187/api/User/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + jwttoken,
                    },
                    body: JSON.stringify(updatedData),
                }
            );

            if (response.ok) {
                console.log("Agent updated successfully");
                fetchAgents();
            } else {
                console.error("Error updating agent:", response.statusText);
                window.alert("Failed to update agent");
            }
        } catch (error) {
            console.error("Error updating agent:", error);
        }
    };
    // Delete
    const deleteAgent = async (Id) => {
        try {
            let jwttoken = sessionStorage.getItem("jwttoken");
            const response = await fetch(
                `https://localhost:7187/api/Agent/${Id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + jwttoken,
                    },
                }
            );

            if (response.ok) {
                console.log("Agent deleted successfully");
                fetchAgents();
            } else {
                console.error("Error deleting agent:", response.statusText);
                window.alert("Failed to delete agent");
            }
        } catch (error) {
            console.error("Error deleting agent:", error);
        }
    };

    // Add New

    return (
        <div>
            <NavbarAdmin />
            <h2>Agents List</h2>

            <table className="table table-bordered table-dark">
                {/* <thead>
                    <th>
                        <td>Name</td>
                        <td>Specialization</td>
                        <td>Status</td>
                        <td>Role</td>
                        <td>Status</td>
                    </th>
                </thead> */}
                <tbody>
                    {Agents.map((Agent) => (
                        <tr key={Agent.userId}>
                            <td>{Agent.userName}</td>
                            <td>{Agent.userEmail}</td>
                            <td>{Agent.role}</td>
                            <td>{Agent.status}</td>
                            <td>
                                <button
                                    className={`btn btn-${Agent.status === "disabled" ? "secondary" : "success"
                                        }`}
                                    onClick={() =>
                                        updateTeacher(Agent.userId, {
                                            ...Agent,
                                            userName: Agent.userName,
                                            userName: Agent.userName,
                                            password: Agent.password,
                                            role: Agent.role,
                                            Status:
                                                Agent.status === "enabled" ? "disabled" : "enabled",
                                        })
                                    }
                                >
                                    {Agent.status}
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Footer></Footer>
        </div>
    );
};

export default Agents;
