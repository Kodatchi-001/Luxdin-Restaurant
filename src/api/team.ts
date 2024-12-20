export async function GetTeamApi() {
    try {
        const response = await fetch('/api/team')
        const data = await response.json()
        return data || []

    } catch (error) {
        console.log(error)
    }
}