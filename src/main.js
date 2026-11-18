var board = JXG.JSXGraph.initBoard("triangle-board", {
    boundingbox: [-6, 6, 6, -5],
    axis: true,
    grid: true,
    showCopyright: false,
});
var A = board.create("point", [-4, 0], {
    name: "A",
    size: "4",
    color: "#ef4444",
});

var B = board.create("point", [4, 0], {
    name: "B",
    size: "4",
    color: "#ef4444",
});

var C = board.create("point", [0, 4], {
    name: "C",
    size: "4",
    color: "#ef4444",
});

const triangle = board.create("polygon", [A, B, C], {
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

board.create("angle", [B, A, C], {
    radius: 0.8,
    name: () => JXG.Math.Geometry.trueAngle(B, A, C).toFixed(1) + "°",

    label: { fontSize: 16, color: "#0369a1" },
});

board.create("angle", [C, B, A], {
    radius: 0.8,

    name: () => JXG.Math.Geometry.trueAngle(C, B, A).toFixed(1) + "°",

    label: { fontSize: 16, color: "#0369a1" },
});

board.create("angle", [A, C, B], {
    radius: 0.8,
    name: () => JXG.Math.Geometry.trueAngle(A, C, B).toFixed(1) + "°",
    label: { fontSize: 16, color: "#0369a1" },
});
