
export const saveState = (key: string, state: number) => {
    localStorage.setItem(key, JSON.stringify(state))
}

export function restoreState(key: string) {
    try {
        const stateAsString = localStorage.getItem(key)
        if (stateAsString)
            return JSON.parse(stateAsString)
        } catch (err) {
        return undefined;
    }

}
