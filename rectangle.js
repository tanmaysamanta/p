const rectangle = function (noOfRows, noOfColumns) {
  const star = "*";
  let figure = "";
  for (let i = 1; i <= noOfRows; i++) {
    figure = figure + (star.repeat(noOfColumns) + "\n");
  }
  return figure;
}

const testRectangle = function (noOfRows, noOfColumns, expectedFigure, message) {
  let mark = "✓"
  if (rectangle(noOfRows, noOfColumns) !== expectedFigure) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const testCasesForRectangle = function () {
  testRectangle(2, 3, "***\n***\n", "no of rows 2 and no of columns 3");
  testRectangle(3, 4, "****\n****\n****\n", "no of rows 3 and no of columns 4");
}

testCasesForRectangle();