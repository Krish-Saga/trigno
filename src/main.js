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
                              A <em>Cartesian</em> plane is a flat, two-dimensional surface formed by two perpendicular number lines that locate any point using a pair of coordinates (x, y). Named after mathematician René Descartes, it is also known as a Cartesian coordinate system or rectangular coordinate plane.
						</p>
                        <h3>Key Parts </h3>
                        <ul><li><strong>X-axis</strong>: The horizontal number line. Positive values lie to the right of zero;  negative values lie to the left.</li>

                        <li><strong>Y-axis</strong>: The vertical number line. Positive values lie above zero;  negative values lie below .</li>
                        <li>
                        <strong>
                        Origin
                        </strong>: The point (0,0) where the x-axis and y-axis intersect at a 90&deg; angle.
                        </li>
                        <li>
                        <strong>Coordinates (x, y)</strong>
                        : An ordered pair showing signed distance from the origin-horizontal (x,abscissa) first, then vertical (y, ordinate)
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

    // Triangle-Graph About trigno Don't need to change
    const snapOptions = {
        snapToGrid: true,
        snapSizeX: 1, // Snaps horizontally to every 1 unit
        snapSizeY: 1, // Snaps vertically to every 1 unit
    };

    var boardTriangle = JXG.JSXGraph.initBoard("triangle-graph", {
        boundingbox: [-6, 6, 6, -5],
        axis: true,
        grid: true,
        showCopyright: false,
    });
    var triA = boardTriangle.create("point", [-4, 0], {
        name: "A",
        size: "4",
        color: "#ef4444",
        ...snapOptions,
    });

    var triB = boardTriangle.create("point", [4, 0], {
        name: "B",
        size: "4",
        color: "#ef4444",
        ...snapOptions,
    });

    var triC = boardTriangle.create("point", [0, 4], {
        name: "C",
        size: "4",
        color: "#ef4444",
        ...snapOptions,
    });

    const triangle = boardTriangle.create("polygon", [triA, triB, triC], {
        fillColor: "#3b82f6",
        fillOpacity: 0.1,
        borders: {
            strokeColor: "#2563eb",
            strokeWidth: 2,
            withLabel: true,
            label: { fontsize: 15, color: "#1e40af" },
        },
    });

    // Displaying side  Lenghts
    triangle.borders.forEach((side) => {
        side.setAttribute({
            name: () => side.L().toFixed(2),
        });
    });

    boardTriangle.create("angle", [triB, triA, triC], {
        radius: 0.8,
        name: () =>
            JXG.Math.Geometry.trueAngle(triB, triA, triC).toFixed(1) + "°",

        label: { fontSize: 16, color: "#0369a1" },
    });

    boardTriangle.create("angle", [triC, triB, triA], {
        radius: 0.8,

        name: () =>
            JXG.Math.Geometry.trueAngle(triC, triB, triA).toFixed(1) + "°",

        label: { fontSize: 16, color: "#0369a1" },
    });

    boardTriangle.create("angle", [triA, triC, triB], {
        radius: 0.8,
        name: () =>
            JXG.Math.Geometry.trueAngle(triA, triC, triB).toFixed(1) + "°",
        label: { fontSize: 16, color: "#0369a1" },
    });
}

main();
