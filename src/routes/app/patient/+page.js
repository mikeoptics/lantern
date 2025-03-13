
/** @type {import('./$types').PageLoad} */
export async function load({url, fetch}) {
    let query = url.searchParams.get('id')
    const res = await fetch(`/api/patientsearch?query=${query}`);
    const item = await res.json();
    return {item};

}
