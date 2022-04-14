//Global Vars
let index = 0;
let previousIndex  = 0;
let week = '1';

function generateQuestion() {

    //filter
    filteredData = data.questions.filter(d=> d.tutorial === week)

    console.log(filteredData);

    //randomise
    index = Math.floor(Math.random() * filteredData.length)

    //Eliminate repeats - this is shit but eh
    if (index == previousIndex) {index += 1};

    //Print data
    document.getElementById("questionBox").innerHTML = filteredData[index].question;

    document.getElementById("answerBox").innerHTML = "";

    previousIndex = index;

}

function showAnswer() {

    //fill question
    document.getElementById("answerBox").innerHTML = filteredData[index].answer;

}

function handleWeek(buttonID) {

    //convert 1 to '1'
    week = buttonID + ""; 

    console.log("Week changed:" + week);

    generateQuestion();

}

//Data - Tute week > Questions
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
            "answer":"Brass is a metal alloy made of copper (Cu) and zinc (Zn); the proportions of zinc and copper can be varied to create a range of brasses with varying properties. - Alpha brass Cu >65 Zn <35 - Beta brass Cu 55-65 Zn 3-45 - White brass Cu <50 Zn >50 etc. It is a substitutional alloy: atoms of the two constituents may replace each other within the same crystal structure."
        },

        {
            "tutorial":"1",
            "question":"What is Pewter? Alloying elements ratio (if any)?",
            "answer":"Pewter is a malleable metal alloy, traditionally - Sn 85-99% - the remainder consisting of Cu, antimony (Sb), bismuth (Bi) and sometimes, less commonly today, lead (Pb)."
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
            "question":"What are some environmental conditions that might adversely affect the engineering properties of plastics?",
            "answer":"Heat, YV, pH & Mechanial Load"
        },

        {
            "tutorial":"1",
            "question":"Which ceramic materials are currently being used for cutting-tool applications? What features and/or properties make them attractive? ",
            "answer":"WC, sintered ceramic composites (Al2O3 + SiN), SiC - High melting T (2500+ C) - Good thermal conductivity (100s W/mK) - Low coefficient of thermal expansion (few μm/mK) - Extreme hardness (8-9 on Mohr scale) - E > 500 GPa - Poor electrical resistivity"
        },

        {
            "tutorial":"1",
            "question":"Why do most ceramic materials fail to possess their theoretically high         tensile strength?",
            "answer":"Presence of defects (bonding- , structural -, etc.)"
        },

        {
            "tutorial":"1",
            "question":"Which metals are noble metals? What properties make them special (i.e.noble)?",
            "answer":"The list of chemically noble metals comprises - ruthenium - rhodium - palladium - silver - osmium - iridium - platinum - gold"
        },

        {
            "tutorial":"1",
            "question":"Among the following materials: Platinum (Pt), Cadmium (Cd), ultra-pure            Aluminium (Al), Gold (Au), Graphite (C), Magnesium (Mg), Zinc (Zn), Silver (Ag) - which are cathodic and which are anodic? ",
            "answer":"- Anodic: Mg, Al, Zn - Cathodic: the rest in the list"
        },

        {
            "tutorial":"1",
            "question":"At what operating conditions discontinuous chip formation is observed? ",
            "answer":"High tool feed rate, High depth of cut"
        },

        {
            "tutorial":"1",
            "question":"Is electrochemical machining suitable to process polymers?",
            "answer":"Not suitable as polymers are (in their majority) electrically nonconductive"
        },

        {
            "tutorial":"2",
            "question":"List the four classifications of steels. For each classification, briefly describe the properties and typical applications",
            "answer":"• Low-carbon, medium-carbon, high-carbon and high alloy steels. Low-C steel (<0.25 wt.% C), medium-C (0.25 - 0. wt.% C), high-C 0.6-1.4wt.%C). Properties vary from soft-low-generic for low-C to hard-high-specialised for highC steels; high alloy steels (stainless) are 0.6-1.4 wt.%C + 11.0 wt.%C +other"
        },

        {
            "tutorial":"2",
            "question":"Cite three reasons why ferrous alloys are used so extensively?",
            "answer":"(1) Fe-compounds are abundant; (2) economical extraction, refining, and fabrication techniques are available; 3) Fe-alloy properties may be tailored to have a wide variety of mechanical and physical properties."
        },

        {
            "tutorial":"2",
            "question":"Which steels are used to make tools. Why?",
            "answer":"High-carbon steels; contain perlitic structure, hard and strong, can be alloyed and effectively heat treated;"
        },

        {
            "tutorial":"2",
            "question":"What is the function of alloying elements in tool steels?",
            "answer":"High-C steels contain alloying ceramic compounds forming an exceptionally hard and wear resistant alloy (e.g., r23C6, V4C3, WC, BN, SiC); these dissipate heat, hold a sharp edge, provide resistance to oxidation, etc."
        },
        {
            "tutorial":"2",
            "question":"List five types of cast irons and briefly describe their characteristics and properties.",
            "answer":"Grey, ductile (nodular), white, malleable and compacted graphite; Grey: (2.5-4.0 wt.% C, 1.0-3.0 wt.% Si), heap, weak and brittle; Ductile: (C and Si same as in grey + Mg, Ce -> perlite is sphere-like),properties better than of grey, properties closer to low-C steel; White: (C same as grey; 1.0 wt.% Si only -> cementite), white, hard,         wear resistant; Malleable: (C and Si same as in white; cementite converted to graphite at high T and under Ar); properties similar to medium-C steel; malleable and cheap; Compacted graphite iron (CGI) (3.1-4.0 wt.% C, 1.0-3.0wt.% Si, wormlike microstructure), EL~3% (low), high T conductivity, excellent resistance to T shock, low oxidation."
        },
        {
            "tutorial":"2",
            "question":"What types of properties do non-ferrous metals possess that may not be available in the ferrous metals?",
            "answer":"Non-Fe metals often possess certain properties not usually associated with ferrous metals, among them are: corrosion resistance, ease of fabrication, high electrical and thermal conductivity, light weight, strength at elevated temperatures and colour"
        },
        {
            "tutorial":"2",
            "question":"In what respects are the nonferrous metals generally inferior to steel?",
            "answer":"The non-Fe alloys are generally inferior to steel in terms of: strength (yield and UTS) - elastic modulus - weldability"
        },
        {
            "tutorial":"2",
            "question":"In what ways might the non-ferrous metals offer attractive ease of fabrication?",
            "answer":"Alloys with low melting points are often easy to cast, using sand moulds, permanent moulds, or dies; Many non-Fe alloys have high ductility coupled with low yield points, the ideal conditions for cold working; Good machinability is also a common characteristic;"
        },
        {
            "tutorial":"2",
            "question":"What are the three properties of Copper and Copper Alloys that account for many of their uses and applications?",
            "answer":"high electrical and thermal conductivity; high ductility; corrosion resistance"
        },

        {
            "tutorial":"2",
            "question":"What properties make Copper attractive for cold-working processes?",
            "answer":"relatively low strength; high ductility. In addition, by cold-working, the tensile strength can be raised from bout 200 MPa to over 300 MPa, with a concurrent drop in EL from 60% to about 5%. The low recrystallisation T is ttractive when additional cold working is desired."
        },
        {
            "tutorial":"2",
            "question":"What are limiting properties of Copper that might restrict its area of application?",
            "answer":" high density - heavier than Fe; strength-to-weight comparisons place it below most engineering           etals. In addition, some significant problems can occur when the metal is used at elevated T."
        },

        {
            "tutorial":"2",
            "question":"What properties of Copper make it attractive for low-temperature applications?",
            "answer":"door knobs; sink handles; HVAC components;"
        },

        {
            "tutorial":"2",
            "question":"Describe the somewhat unique properties available with heat treated Copper-Beryllium (Cu-Be or BeCu) alloys.",
            "answer":"In addition to having strengths similar to steel, the alloys are non-sparking, nonmagnetic, and have high electrical and thermal conductivity."
        },

        {
            "tutorial":"2",
            "question":"What are some of the attractive engineering properties of Aluminium and Aluminium Alloys?",
            "answer":"Al and Al-alloys have achieved popularity due to their light weight, high electrical and thermal conductivity, good corrosion resistance, workability, variety of available finishes, and recyclability."
        },

        {
            "tutorial":"2",
            "question":"What is primary benefit of Aluminium recycling compared to making new Aluminium from ore?",
            "answer":"The recycling of Al saves 95% of the energy required to process Al from ore."
        },

        {
            "tutorial":"2",
            "question":"How does Al compare to Cu in terms of electrical conductivity?",
            "answer":"The electrical conductivity of pure Al is approximately 62% that of Cu for the same size wire, and 200% that of Cu on an equal weight basis;"
        },

        {
            "tutorial":"2",
            "question":"What features might limit the mechanical uses and applications of Aluminium and Aluminium alloys?",
            "answer":"Al alloys are inferior to steel in the area of elastic modulus. In addition, the wear, creep, and fatigue   properties are generally rather poor. In addition, Al loses a significant portion of its strength when heated to T much above 175 °C."
        },

        {
            "tutorial":"2",
            "question":"",
            "answer":""
        },

        {
            "tutorial":"2",
            "question":"",
            "answer":""
        },

        {
            "tutorial":"2",
            "question":"",
            "answer":""
        },
        
        {
            "tutorial":"2",
            "question":"",
            "answer":""
        },
        
        {
            "tutorial":"2",
            "question":"Why might cold-worked brass require a stress relief prior to being placed in service?",
            "answer":"Brasses are susceptible to stress corrosion cracking"
        }
    ]
}