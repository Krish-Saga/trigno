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

// angle-graph board

var boardAngle = JXG.JSXGraph.initBoard("angle-graph", {
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
var angA = boardAngle.create("point", [3, 3], {
    name: "A",
    size: 4,
    color: "black",
    ...snapOptions,
});

var angB = boardAngle.create("point", [0, 0], {
    name: "Vertex B",
    size: 4,
    color: "black",
    label: {
        offset: [-50, 15],
        fontSize: 14,
    },
    ...snapOptions,
});

var angC = boardAngle.create("point", [3, 0], {
    name: "C",
    size: 4,
    color: "black",
    ...snapOptions,
});
var segAB = boardAngle.create("segment", [angA, angB], {
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
var alpha = boardAngle.create("angle", [angC, angB, angA], {
    name: () => JXG.Math.Geometry.trueAngle(angC, angB, angA).toFixed(1) + "°",
    radius: 0.8,
    fillOpacity: 0.15,
    strokeWidth: 0,
});
console.log(angC.X());

// Creating a point on the start of radius
var arcStart = boardAngle.create(
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
var alphaArrow = boardAngle.create("arc", [angB, arcStart, angA], {
    strokeColor: "#d9822b",
    strokeWidth: 2,
    lastArrow: {
        type: 2,
        size: 6,
    },
});

console.log(angB.X());
var segBC = boardAngle.create("segment", [angB, angC], {
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
