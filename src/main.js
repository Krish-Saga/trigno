const question = document.querySelector("#basicsOfTrigno .main-body2");
const lessonQuestion = document.getElementById("lessonQuestion");
const content = document.getElementById("content");
const nxtbtn = document.getElementById("nxtchpt");
const prvbtn = document.getElementById("prvschpt");
const lessonGraph = document.getElementById("lessonGraph");
function changeContent(currentLesson) {
    lessonQuestion.textContent = Lessons[currentLesson].title;
    content.innerHTML = Lessons[currentLesson].content;
    console.log((lessonGraph.innerHTML = Lessons[currentLesson].graph));
}

const Lessons = [
    {
        title: "Q. What is an Angle ?",
        graph: `<div id="angle-graph"></div>`,
        content: `

						<p>
							<strong>
								Ans.
							</strong>
							An Angle is a rotational separation between 2 rays
						</p>
						<h3>Angle Components</h3>
						<ul>
							<li><strong>Initial side</strong>: The side that shows the starting position of angle.</li>
							<li><strong>Vertex</strong>: Point where rays intersect</li>
							<li><strong>Terminal Side</strong>: The side that shows the ending position of angle.</li>
						</ul>

						<p>
							When the initial side rotates <em>clockwise</em>, the angle is
							<em>negative</em>. When it rotates <em>counterclockwise</em>,
							the angle is <em>positive</em>.
							This is a widely used mathematical convention. It is not that
							you cannot use the opposite convention, but following the same
							convention helps mathematicians stay consistent and work together.
						</p>

						<h3>Thus, remember:</h3>

						<ul>
							<li>
								<strong>Moving Clockwise</strong>:  Negative Angle
							</li>
							<li>
								<strong>Moving Counterclockwise</strong>: Positive Angle
							</li>
						</ul>

						<p><em><strong>Note:</strong></em> Angles are usually represented by a small arc connecting the two arms near their vertex. However, a square is used to represent a 90&deg; angle. This is a special geometric convention that makes right angles easy to identify.</p>


        `,
    },
    {
        title: "Q. What is Cartesian Plane ? Why we need it ?",
        graph: "quadrant",
        content: `
						<p>
							<strong>Ans.</strong>
                              A <em>Cartesian</em> plane is a flat, two-dimensional surface formed by two perpendicular number lines that locate any point using a pair of coordinates (x, y). Named after mathematician René Descartes, it is also known as a Cartesian coordinate system or rectangular coordinate plane.
							
						</p>

        `,
    },
];
async function main() {
    currentLesson = 0;
    changeContent(currentLesson);
    nxtbtn.addEventListener("click", () => {
        currentLesson = (currentLesson + 1) % Lessons.length;
        changeContent(currentLesson);
    });

    prvbtn.addEventListener("click", () => {
        currentLesson = (currentLesson + 1) % Lessons.length;
        changeContent(currentLesson);
    });
}

main();
