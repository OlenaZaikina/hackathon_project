import React, { useContext, useState } from 'react'

export const GoalContext = React.createContext()
export const GoalUpdateContext = React.createContext()

export function useGoal() {
    return useContext(GoalContext)
}

export function useGoalUpdate() {
    return useContext(GoalUpdateContext)
}

export function GoalProvider({ children }) {
    const [goal, setGoal] = useState(null)
    function toggleGoal(newGoal) {
        setGoal(newGoal)
        console.log("newGoal: ", newGoal)
    }

    return (
        <GoalContext.Provider value={goal}>
            <GoalUpdateContext.Provider value={toggleGoal}>
                {children}
            </GoalUpdateContext.Provider>
        </GoalContext.Provider>
    )
}