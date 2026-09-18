document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CAREER SKILLS
    ========================= */

    const careerSkills = {

        "Data Analyst": [
            "Python",
            "SQL",
            "Excel",
            "Data Visualization",
            "Statistics"
        ],

        "Cloud Engineer": [
            "Linux",
            "Networking",
            "Python",
            "Cloud Fundamentals",
            "Security Basics"
        ],

        "Frontend Developer": [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "Git"
        ],

        "AI Engineer": [
            "Python",
            "Statistics",
            "Machine Learning",
            "Data Handling",
            "AI Fundamentals"
        ]

    };


    /* =========================
       LEARNING ROADMAPS
    ========================= */

    const learningRoadmaps = {

        "Python": [
            "Learn Python fundamentals",
            "Practice basic Python programs"
        ],

        "SQL": [
            "Learn SELECT, WHERE and ORDER BY",
            "Practice JOINs and aggregate functions"
        ],

        "Excel": [
            "Learn formulas and data cleaning",
            "Practice PivotTables and charts"
        ],

        "Data Visualization": [
            "Learn charts and dashboards",
            "Build a simple visualization project"
        ],

        "Statistics": [
            "Learn mean, median and standard deviation",
            "Practice interpreting datasets"
        ],

        "Linux": [
            "Learn basic Linux commands",
            "Practice file and permission management"
        ],

        "Networking": [
            "Understand IP addresses and DNS",
            "Learn basic networking concepts"
        ],

        "Cloud Fundamentals": [
            "Learn cloud computing concepts",
            "Explore compute, storage and networking"
        ],

        "Security Basics": [
            "Learn identity and access management",
            "Understand basic security concepts"
        ],

        "HTML": [
            "Learn HTML structure and semantic elements",
            "Build a simple webpage"
        ],

        "CSS": [
            "Learn layouts, Flexbox and Grid",
            "Create a responsive webpage"
        ],

        "JavaScript": [
            "Learn variables, functions and DOM",
            "Build interactive webpage features"
        ],

        "Responsive Design": [
            "Learn media queries",
            "Test websites on different screen sizes"
        ],

        "Git": [
            "Learn commits and branches",
            "Push a project to GitHub"
        ],

        "Machine Learning": [
            "Learn supervised and unsupervised learning",
            "Build a beginner ML project"
        ],

        "Data Handling": [
            "Learn data cleaning and preprocessing",
            "Practice with a small dataset"
        ],

        "AI Fundamentals": [
            "Understand AI and Generative AI concepts",
            "Explore responsible AI use"
        ]

    };


    /* =========================
       GET HTML ELEMENTS
    ========================= */

    const careerSelect =
        document.getElementById("career");

    const skillsInput =
        document.getElementById("skills");

    const generateBtn =
        document.getElementById("generateBtn");

    const resultsSection =
        document.getElementById("results");


    /* =========================
       CHECK ELEMENTS
    ========================= */

    if (
        !careerSelect ||
        !skillsInput ||
        !generateBtn ||
        !resultsSection
    ) {

        console.error(
            "Required HTML elements are missing."
        );

        return;
    }


    /* =========================
       GENERATE ROADMAP
    ========================= */

    generateBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            /* Get selected career */

            const selectedCareer =
                careerSelect.value;


            /* Check career */

            if (!selectedCareer) {

                alert(
                    "Please select your target career."
                );

                return;
            }


            /* Get user skills */

            const currentSkills =
                skillsInput.value
                    .split(",")
                    .map(function (skill) {
                        return skill
                            .trim()
                            .toLowerCase();
                    })
                    .filter(function (skill) {
                        return skill !== "";
                    });


            /* Required skills */

            const requiredSkills =
                careerSkills[selectedCareer] || [];


            /* Skills user already knows */

            const knownSkills =
                requiredSkills.filter(
                    function (skill) {

                        return currentSkills.includes(
                            skill.toLowerCase()
                        );

                    }
                );


            /* Skills user needs to learn */

            const missingSkills =
                requiredSkills.filter(
                    function (skill) {

                        return !currentSkills.includes(
                            skill.toLowerCase()
                        );

                    }
                );


            /* Skill match percentage */

            const skillMatch =
                requiredSkills.length > 0
                    ? Math.round(
                        (knownSkills.length /
                            requiredSkills.length) * 100
                    )
                    : 0;


            /* =========================
               DISPLAY RESULTS
            ========================= */

            resultsSection.innerHTML = `

                <div class="results-header">

                    <h2>
                        Your SkillBridge Report
                    </h2>

                    <p>
                        Personalized learning path for
                        ${selectedCareer}
                    </p>

                </div>


                <div class="results-grid">

                    <div class="result-card">

                        <h3>
                            Current Skills
                        </h3>

                        <p class="result-number">
                            ${knownSkills.length}
                        </p>

                        <span>
                            Skills you already know
                        </span>

                    </div>


                    <div class="result-card">

                        <h3>
                            Missing Skills
                        </h3>

                        <p class="result-number">
                            ${missingSkills.length}
                        </p>

                        <span>
                            Skills to learn
                        </span>

                    </div>


                    <div class="result-card">

                        <h3>
                            Skill Match
                        </h3>

                        <p class="result-number">
                            ${skillMatch}%
                        </p>

                        <span>
                            Based on listed career skills
                        </span>

                    </div>

                </div>


                <!-- Current Skills -->

                <div class="result-card">

                    <h3>
                        ✅ Skills You Have
                    </h3>

                    <div class="skill-tags">

                        ${
                            knownSkills.length > 0

                            ? knownSkills
                                .map(function (skill) {
                                    return `
                                        <span>
                                            ${skill}
                                        </span>
                                    `;
                                })
                                .join("")

                            : `
                                <p>
                                    No matching skills found yet.
                                </p>
                            `
                        }

                    </div>

                </div>


                <!-- Missing Skills -->

                <div class="result-card">

                    <h3>
                        📌 Skills to Learn
                    </h3>

                    <div class="skill-tags">

                        ${
                            missingSkills.length > 0

                            ? missingSkills
                                .map(function (skill) {
                                    return `
                                        <span>
                                            ${skill}
                                        </span>
                                    `;
                                })
                                .join("")

                            : `
                                <p>
                                    You have listed all the
                                    required skills!
                                </p>
                            `
                        }

                    </div>

                </div>


                <!-- Learning Roadmap -->

                <div class="result-card">

                    <h3>
                        🚀 Your Learning Roadmap
                    </h3>

                    <ol class="roadmap-list">

                        ${
                            missingSkills.length > 0

                            ? missingSkills
                                .map(function (skill) {

                                    const topics =
                                        learningRoadmaps[skill]
                                        || [
                                            "Learn the fundamentals of " + skill,
                                            "Practice with a beginner-friendly project"
                                        ];


                                    return `

                                        <li>

                                            <strong>
                                                ${skill}
                                            </strong>

                                            <ul>

                                                ${
                                                    topics
                                                        .map(function (topic) {
                                                            return `
                                                                <li>
                                                                    ${topic}
                                                                </li>
                                                            `;
                                                        })
                                                        .join("")
                                                }

                                            </ul>

                                        </li>

                                    `;

                                })
                                .join("")

                            : `

                                <li>
                                    Continue improving your
                                    existing skills through projects.
                                </li>

                            `
                        }

                    </ol>

                </div>

            `;


            /* Scroll to results */

            resultsSection.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});