export async function routerAuth(navigate ,token) {

    let cleanData = { token };

    let response = await fetch('http://localhost:8080/lapsins_api/financeAPI/getToken.php', {
        method: 'POST',
        body: JSON.stringify(cleanData),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    });

    response = await response.json();

    if (response.status === 403) {
        navigate('/Login');
    }
}