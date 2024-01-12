function line(x1a, y1a, x2a, y2a) {
  let side = 0;
  let x1 = x1a,y1 = y1a,x2 = x2a, y2 = y2a;
  let dx = Math.abs(x2a - x1a);
  let dy = Math.abs(y2a - y1a);
  if (dx <= dy) {
    side = 1;
    x1 = y1a;
    y1 = x1a;
    x2 = y2a;
    y2 = x2a;
    dx = Math.abs(y2a - y1a);
    dy = Math.abs(x2a - x1a);
  }
  let pk = 2 * dy - dx;
  for (let i = 0; i <= dx-1; i++) {
    if (!side) {
      // plot as x1, y1
    } else {
      // plot as y1, x1
    }
    if (x1 < x2) x1++; else x1--;
    if (pk < 0) pk = pk + 2 * dy;
    else {
      if (y1 < y2) y1++; else y1--;
      pk = pk + 2 * dy - 2 * dx;
    }
  }
}
