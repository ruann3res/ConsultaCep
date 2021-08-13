window.addEventListener("load", function (event) {

    const inputs = Array.from(document.getElementsByTagName("input"));
    const cep = document.querySelector("#cep");
    let busca = document.getElementById("btnBusca");
    console.log(busca)
    let limpar = document.getElementById("btnLimpar")

    const ShowData = (result) => {
        for (const campo in result) {
            if (document.querySelector("#" + campo)) {
                document.querySelector("#" + campo).value = result[campo]
            }
        }
    }
    busca.addEventListener("click", async () => {
        let search = cep.value.replace("-", "");
        if (search.length < 8) {
            alert('CEP invalido')
            return
        }
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }
        if (!cep.value) {
            alert("Nao e possivel pesquisar, Por favor insira o CEP")
            return
        }
        // const response = await fetch(`http://localhost:4567/${search}`)
        //    .then(response => {
        //         response.json()
        //             .then(data => ShowData(data))
        //     })
        //     .catch(e => console.log('Deu Erro:'))

        const response = await fetch(`http://localhost:4567/${search}`)
        if (response.status !== 200) {
            alert('CEP nao encontrado')
        }
        else {

            const data = await response.json()
            ShowData(data)
        }

    })

    limpar.addEventListener("click", () => {
        inputs.forEach(input => {
            input.value = ""

        });
    })
});
