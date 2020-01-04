registerPaint('cicle', class {
    paint(ctx, ele) {
      const color = 'red';
      ctx.fillStyle = color;
      const x = ele.width / 2;
      const y = ele.height / 2;
      const radius = Math.min(x, y);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  })
  