const snapOptions = {
    snapToGrid: true,
    snapSizeX: 1, // Snaps horizontally to every 1 unit
    snapSizeY: 1, // Snaps vertically to every 1 unit
};

// Triangle-Graph About trigno Don't need to change
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
    name: () => JXG.Math.Geometry.trueAngle(triB, triA, triC).toFixed(1) + "°",

    label: { fontSize: 16, color: "#0369a1" },
});

boardTriangle.create("angle", [triC, triB, triA], {
    radius: 0.8,

    name: () => JXG.Math.Geometry.trueAngle(triC, triB, triA).toFixed(1) + "°",

    label: { fontSize: 16, color: "#0369a1" },
});

boardTriangle.create("angle", [triA, triC, triB], {
    radius: 0.8,
    name: () => JXG.Math.Geometry.trueAngle(triA, triC, triB).toFixed(1) + "°",
    label: { fontSize: 16, color: "#0369a1" },
});

// Cartesian Plane Graph
export function createCartesianPlane(currentBoard) {
    var currentBoard = JXG.JSXGraph.initBoard("CartesianPlane", {
        boundingbox: [-5, 5, 5, -5],
        axis: true,
        grid: true,
        showCopyright: false,
    });

    const quadrants = [
        {
            x: 2.5,
            y: 2.5,
            title: "Quadrant 1",
            signs: "( + , + )",
            color: "red",
        },
        {
            x: -2.5,
            y: 2.5,
            title: "Quadrant 2",
            signs: "( &minus; , + )",
            color: "red",
        },
        {
            x: -2.5,
            y: -2.5,
            title: "Quadrant 3",
            signs: "( &minus; , &minus; )",
            color: "red",
        },
        {
            x: 2.5,
            y: -2.5,
            title: "Quadrant 4",
            signs: "( + , &minus; )",
            color: "red",
        },
    ];

    quadrants.forEach(({ x, y, title, signs, color }) => {
        const html = `
    <div style="
      text-align: center;
      line-height: 1.3;
    ">
      <div style="font-size: 13px; font-weight: 600; color: #194350;">${title}</div>
      <div style="font-size: 16px; font-weight: 800; color: ${color}; letter-spacing: 1px;">${signs}</div>
    </div>
  `;
        currentBoard.create("text", [x, y, html], {
            anchorX: "middle",
            anchorY: "middle",
            fontSize: 16,
            fixed: true,
            parse: false,
            highlight: false,
        });
    });
}

// angle-graph board

export function createAngleGraph(currentBoard) {
    var currentBoard = JXG.JSXGraph.initBoard("angle-graph", {
        boundingbox: [-3, 6, 6, -5],
        axis: true,
        grid: true,
        showCopyright: false,
        defaultAxes: {
            y: {
                visible: false,
            },
        },
    });
    var angA = currentBoard.create("point", [3, 3], {
        name: "A",
        size: 4,
        color: "black",
        ...snapOptions,
    });

    var angB = currentBoard.create("point", [0, 0], {
        name: "Vertex B",
        size: 4,
        color: "black",
        label: {
            offset: [-50, 15],
            fontSize: 14,
        },
        ...snapOptions,
    });

    var angC = currentBoard.create("point", [3, 0], {
        name: "C",
        size: 4,
        color: "black",
        ...snapOptions,
    });
    var segAB = currentBoard.create("segment", [angA, angB], {
        name: "Terminal Side",
        withLabel: true,
        strokeColor: "black",
        strokeWidth: 2,
        label: {
            display: "internal",
            rotate: 45,
            anchorX: "middle",
            anchorY: "bottom",
            offset: [-10, 10],
            fontSize: 14,
        },
    });
    var alpha = currentBoard.create("angle", [angC, angB, angA], {
        name: () =>
            JXG.Math.Geometry.trueAngle(angC, angB, angA).toFixed(1) + "°",
        radius: 0.8,
        fillOpacity: 0.15,
        strokeWidth: 0,
    });
    console.log(angC.X());

    // Creating a point on the start of radius
    var arcStart = currentBoard.create(
        "point",
        [
            function () {
                var dx = angC.X() - angB.X();
                var dy = angC.Y() - angB.Y();
                var len = Math.hypot(dx, dy);
                return angB.X() + (0.8 * dx) / len;
            },
            function () {
                var dx = angC.X() - angB.X();
                var dy = angC.Y() - angB.Y();
                var len = Math.hypot(dx, dy);
                return angB.Y() + (0.8 * dy) / len;
            },
        ],
        { visible: false },
    );

    // Drawing arc from the point we have created on the radius
    var alphaArrow = currentBoard.create("arc", [angB, arcStart, angA], {
        strokeColor: "#d9822b",
        strokeWidth: 2,
        lastArrow: {
            type: 2,
            size: 6,
        },
    });

    console.log(angB.X());
    var segBC = currentBoard.create("segment", [angB, angC], {
        name: "Initial Side",
        withLabel: true,
        strokeColor: "black",
        strokeWidth: 2,
        label: {
            display: "internal",
            anchorX: "middle",
            anchorY: "bottom",
            fontSize: 14,
            offset: [10, -30],
        },
    });
}
let currentBoard = null;
export function createGraph(graph) {
    if (currentBoard) {
        JXG.JSXGraph.freeBoard(currentBoard);
        currentBoard = null;
    }
    if (graph == "angle-graph") {
        createAngleGraph(graph);
    } else if (graph == "CartesianPlane") {
        createCartesianPlane(graph);
    }
}
