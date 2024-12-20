export default async function GetMenuApi() {
    try {
        const response = await fetch('api/menu')
        const data = await response.json()
        return data || []

    } catch (error) {
        console.log(error)
    }
}