let index = 0;

function generateQuestion() {

    //randomise
    index = Math.floor(Math.random() * data.questions.length)

    //read data
    document.getElementById("questionBox").innerHTML = data.questions[index].question;

    document.getElementById("answerBox").innerHTML = "";

}

function showAnswer() {

    //fill question
    document.getElementById("answerBox").innerHTML = data.questions[index].answer;

}

var data = {
    "questions" : [
    
        {
            "tutorial":"1",
            "question":"What is Bronze? List alloying elements in bronze and their ratio(s)?",
            "answer":"Bronze is an alloy consisting primarily of Cu, commonly with about 12% tin(Sn) and, often with the addition of other metals such as aluminium (Al), manganese(Mg), nickel (Ni) or zinc (Zn) and, sometimes non-metals or metalloids such as arsenic (As), phosphorus (P) or silicon (Si)."
        },

        {
            "tutorial":"1",
            "question":"What is Brass (i.e. an alloy consisting of…)? What is the ratio of alloying elements in Brass (if any)?",
            "answer":"Brass is a metal alloy made of copper (Cu) and zinc (Zn); the proportions of zinc and copper can be varied to create a range of brasses with varying properties. • Alpha brass Cu >65 Zn <35 • Beta brass Cu 55-65 Zn 3-45 • White brass Cu <50 Zn >50 etc. It is a substitutional alloy: atoms of the two constituents may replace each other within the same crystal structure."
        },

        {
            "tutorial":"1",
            "question":"What is Pewter? Alloying elements ratio (if any)?",
            "answer":"Pewter is a malleable metal alloy, traditionally • Sn 85-99% • the remainder consisting of Cu, antimony (Sb), bismuth (Bi) and sometimes, less commonly today, lead (Pb)."
        },

        {
            "tutorial":"1",
            "question":"What is depleted uranium and where it is used? Why?",
            "answer":"Depleted uranium (DU; also referred to in the past as Q-metal, depletalloy or D-38) is uranium with a lower content of the fissile isotope U-235 than natural uranium. Natural uranium contains about 0.72% of its fissile isotope U-235, while the DU used by the U.S. Department of Defence contain 0.3% U-235 or less). Uses of DU take advantage of its very high density of 19.1 g/cm3 (68.4% denser than lead)."
        },

        {
            "tutorial":"1",
            "question":"What are 2 main alloying elements in cast iron? Give approximate at.% or wt.% values.",
            "answer":"Carbon (C) and silicon (Si) are the main alloying elements, with the amount ranging from 2.1-4 wt% and 1-3 wt%, respectively"
        },

        {
            "tutorial":"1",
            "question":"Briefly describe and differentiate thermoplastic and thermosetting plastics.",
            "answer":"A thermoplastic, or thermosoftening plastic, is a plastic material, polymer, that becomes pliable or moldable above a specific temperature and solidifies upon cooling. e.g. ABS, PPMA, nylon, PLA, PC, PE, etc. A thermosetting polymer (plastic), also known as a thermoset, is a prepolymer material which cures irreversibly.e.g. PU, rubber, epoxy resin, melamine, etc"
        },

        {
            "tutorial":"1",
            "question":"",
            "answer":""
        },

        {
            "tutorial":"1",
            "question":"",
            "answer":""
        },

        {
            "tutorial":"",
            "question":"",
            "answer":""
        }

    ]
}