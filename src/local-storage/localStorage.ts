
export const saveState = (key: string, state: number) => {
    localStorage.setItem(key, JSON.stringify(state))
}

export function restoreState(key: string) {
    const stateAsString = localStorage.getItem(key)
    if (stateAsString)
        return JSON.parse(stateAsString)
}

export const saveMaxValue = (maxValue: number) => {
    saveState('max', maxValue)
}