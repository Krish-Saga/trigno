import { createGraph } from "./Visuals/Triangle.js";
const lessonQuestion = document.getElementById("lessonQuestion");
const content = document.getElementById("content");
const nxtbtn = document.getElementById("nxtchpt");
const prvbtn = document.getElementById("prvschpt");
const lessonGraph = document.getElementById("lessonGraph");

// This function Changes content of the Basics box
function changeContent(currentLesson) {
    lessonQuestion.textContent = Lessons[currentLesson].title;
    content.innerHTML = Lessons[currentLesson].content;
    if (Lessons[currentLesson].graph) {
        lessonGraph.innerHTML = `<div id=${Lessons[currentLesson].graph} class="jxgbox"></div>`;
        createGraph(Lessons[currentLesson].graph);
    }
}

const Lessons = [
    {
        title: "Q. What is an Angle ?",
        graph: "angle-graph",
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
        graph: "CartesianPlane",
        content: `
                        <p>
                        <strong>Ans.</strong>
                        A <em>Cartesian</em> plane is a flat, two-dimensional surface formed by two perpendicular number lines that help us locate any point using a pair of coordinates (x, y). It is named after the mathematician René Descartes and is also known as the Cartesian coordinate plane.
                        </p>

                        <p>
                        This graph basically goes to infinity in all directions. It is created for this very purpose! You can also try zooming in and out using the buttons in the bottom-right corner of the graph. You can move left, right, up, and down, but you are never going to reach the end. It's infinite, and it is cool! :)
                        </p>

                        <p>
                        <strong>Fun Fact:</strong> Srinivasa Ramanujan was an Indian mathematician who is often called  <em>"The Man Who Knew Infinity"</em>.</p>
                        <p>His work has contributed greatly to mathematics and continues to amaze people. He had an incredible love for numbers and even spoke about receiving mathematical ideas in his dreams from the goddess Namagiri.
                        But don't worry, even if he were here and you asked him where he got his ideas, he might have said:
                            "I got this in my dreams from the goddess. Trust me, bro."
                            (The only "trust me, bro" a scientist might actually trust. /joke)
                        </p>
                        <h3>Key Points </h3>
                        <ul><li><strong>X-axis</strong>: The horizontal number line. Positive values lie to the right of zero;  negative values lie to the left.</li>

                        <li><strong>Y-axis</strong>: The vertical number line. Positive values lie above zero;  negative values lie below .</li>
                        <li>
                        <strong>
                        Origin
                        </strong>: The point (0,0) where the x-axis and y-axis intersect at a 90&deg; angle. 
                        </li>
                        <li>
                        <strong>Coordinates (x, y)</strong>
                        : An ordered pair showing signed distance from the origin-horizontal (x,abscissa) first, then vertical (y, ordinate)</li>
                        <li><strong>Quadrants</strong>: The four equal regions created by the intersecting axes,numbered 1 to 4 counterclockwise starting from top right.
                        </ul>
                        <h3>How Coordinates work ?</h3>
                        <p> Every location on the grid is written as an ordered pair in the format (x,y)</p>

                        <ul><li><strong> The x-coordinate (OR abscissa)</strong>: This tells you how far to move horizontally from the origin. Positive numbers go right, negative numbers go left.</li>
                       <li><strong> The y-coordinate (OR ordinate)</strong>: This tells you how far to move vertically from the origin. Positive numbers go up, negative numbers go down.</li>
                        </ul>

        `,
    },
];
function main() {
    let currentLesson = 0;
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
