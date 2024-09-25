document.getElementById("btn1").onclick = function() {
    window.location.href = "likha.html";
};

function card() {
    const card_section = document.getElementById("cardi");
    card_section.classList.remove("hidden");
    const his_section = document.getElementById("his_sec");
    his_section.classList.add("hidden");
}

function history() {
    const his_section = document.getElementById("his_sec");
    const card_section = document.getElementById("cardi");
    card_section.classList.add("hidden");
    his_section.classList.remove("hidden");
}

function home() {
    window.location.href = "index.html";
}

function noakhali_start() {
    const given_money = document.getElementById("am_no").value;
    const given_money_float = parseFloat(given_money);
    const amar_ache = document.getElementById("amar_main_tk").innerText;
    const amar_ache_float = parseFloat(amar_ache);
    const money_n = document.getElementById("noakhali_money");
    const money_n_ek = money_n.innerText;
    document.getElementById("am_no").value = "";
    if (!isNaN(given_money) &&
        given_money_float >= 0 &&
        given_money_float < amar_ache_float &&
        typeof given_money_float === "number"
    ) {
        money_n.innerText = given_money_float + parseFloat(money_n_ek);
        const ekn_ache = amar_ache_float - given_money_float;
        amar_main_tk.innerText = ekn_ache;
        const modal = document.getElementById("modal1");
        modal.classList.remove("hidden");
    } else {
        alert("Sir,input the value accurately");
    }
}

function feni_start() {
    const given_money = document.getElementById("fe_no").value;
    const given_money_float = parseFloat(given_money);
    const amar_ache = document.getElementById("amar_main_tk").innerText;
    const amar_ache_float = parseFloat(amar_ache);
    const money_n = document.getElementById("feni_money");
    const money_n_ek = money_n.innerText;
    document.getElementById("fe_no").value = "";
    if (!isNaN(given_money) &&
        given_money_float >= 0 &&
        given_money_float < amar_ache_float &&
        typeof given_money_float === "number"
    ) {
        money_n.innerText = given_money_float + parseFloat(money_n_ek);
        const ekn_ache = amar_ache_float - given_money_float;
        amar_main_tk.innerText = ekn_ache;
        const modal = document.getElementById("modal2");
        modal.classList.remove("hidden");
    } else {
        alert("Sir,input the value accurately");
    }
}

function quato_start() {
    const given_money = document.getElementById("qo_no").value;
    const given_money_float = parseFloat(given_money);
    const amar_ache = document.getElementById("amar_main_tk").innerText;
    const amar_ache_float = parseFloat(amar_ache);
    const money_n = document.getElementById("quato_money");
    const money_n_ek = money_n.innerText;
    document.getElementById("qo_no").value = "";
    if (!isNaN(given_money) &&
        given_money_float >= 0 &&
        given_money_float < amar_ache_float &&
        typeof given_money_float === "number"
    ) {
        money_n.innerText = given_money_float + parseFloat(money_n_ek);
        const ekn_ache = amar_ache_float - given_money_float;
        amar_main_tk.innerText = ekn_ache;
        const modal = document.getElementById("modal3");
        modal.classList.remove("hidden");
    } else {
        alert("Sir,input the value accurately");
    }
}

function light() {
    const a = document.getElementById("cardi");
    const b = document.getElementById("Donation_b");
    const c = document.getElementById("his_sec");
    const d = document.getElementById("History_b");

    if (!a.classList.contains("hidden")) {
        b.classList.add("bg-blue-300");
    }
    if (a.classList.contains("hidden")) {
        b.classList.remove("bg-blue-300");
    }
    if (!c.classList.contains("hidden")) {
        d.classList.add("bg-blue-300");
    }
    if (c.classList.contains("hidden")) {
        d.classList.remove("bg-blue-300");
    }
}
light();

function of1() {
    const cards = document.getElementById("modal1");
    cards.classList.add("hidden");
}

function of2() {
    const cardss = document.getElementById("modal2");
    cardss.classList.add("hidden");
}

function of3() {
    const cardsss = document.getElementById("modal3");
    cardsss.classList.add("hidden");
}