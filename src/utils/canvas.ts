/**
 * 根据圆心坐标、半径、角度求圆上某点坐标
 * @param point
 * @param radius
 * @param deg
 */
export const pointCoor = (point: IPoint, radius: number, deg: number) => {
  return [
    point.x + radius * Math.cos((deg * Math.PI) / 180),
    point.y + radius * Math.sin((deg * Math.PI) / 180),
  ];
};

/**
 * 根据角度计算弧度
 * @param angle
 */
export const radian = (angle: number) => (angle * Math.PI) / 180;

/**
 * 根据弧度计算角度
 * @param rad
 */
export const angle = (rad: number) => (rad / Math.PI) * 180;

interface ICanvasRect {
  width: number;
  height: number;
}

interface ICanvasBaseOptions {
  /**
   * 弧线宽度
   */
  lineWidth: number;
  /**
   * 弧线样式
   */
  strokeColor: string | CanvasGradient | CanvasPattern;
  /**
   * 填充样式
   */
  fillColor: string | CanvasGradient | CanvasPattern;
}

export interface IPoint {
  x: number;
  y: number;
}

/**
 * 绘制线
 * @param context
 * @param start
 * @param end
 * @param width
 * @param color
 */
export const drawLine = (
  context: CanvasRenderingContext2D,
  start: IPoint,
  end: IPoint,
  { width, color }: { width: number; color: string },
) => {
  if (!context) {
    return;
  }
  context.beginPath();
  context.lineWidth = width;
  context.strokeStyle = color;
  context.moveTo(start.x, start.y);
  context.lineTo(end.x, end.y);
  context.stroke();
};

/**
 * 绘制圆
 * @param context
 * @param center 圆心坐标
 * @param radius 半径
 * @param width
 * @param color 颜色
 */
export const drawCircle = (
  context: CanvasRenderingContext2D,
  center: IPoint,
  radius: number,
  { color }: { width: number; color: string },
) => {
  if (!context) {
    return;
  }
  context.beginPath();
  context.arc(center.x, center.y, radius, 0, 4 * Math.PI);
  context.fillStyle = color;
  context.fill();
  context.closePath();
};

interface ISectorOptions extends ICanvasBaseOptions {
  /**
   * 起点角度
   */
  startAngle: number;
  /**
   * 起点弧度
   */
  endAngle: number;
  /**
   * 半径
   */
  radius: number;
}

/**
 * 绘制扇形
 * @param context
 * @param center
 * @param options
 */
export const drawSector = (
  context: CanvasRenderingContext2D,
  center: IPoint,
  options: ISectorOptions,
) => {
  if (!context) {
    return;
  }
  const { startAngle, endAngle, lineWidth, strokeColor, radius, fillColor } =
    options;
  context.beginPath();
  context.moveTo(center.x, center.y);
  context.arc(center.x, center.y, radius, radian(startAngle), radian(endAngle));
  context.fillStyle = fillColor;
  context.fill();
  const p2 = pointCoor(center, radius, endAngle);
  context.moveTo(p2[0], p2[1]);
  context.lineTo(center.x, center.y);
  context.strokeStyle = strokeColor;
  context.lineWidth = lineWidth;
  context.stroke();
  context.closePath();
};

/**
 * 清除画布
 * @param context
 * @param center
 * @param rect
 */
export const clearContext = (
  context: CanvasRenderingContext2D,
  center: IPoint,
  rect: ICanvasRect,
) => {
  if (!context) {
    return;
  }
  const { width, height } = rect;
  context.clearRect(center.x, center.y, width, height);
};
