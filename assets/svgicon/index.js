// const cone = require('./cone.svg')
// const cube = require('./cube.svg')
const cone = require('raw-loader!./cone.txt')
const cube = require('raw-loader!./cube.txt')
const cuboid = require('raw-loader!./cuboid.txt')
const cylinder = require('raw-loader!./cylinder.txt')
const dihedron = require('raw-loader!./dihedron.txt')
const enGrid = require('raw-loader!./en_grid.txt')
const fourPyramid = require('raw-loader!./four_pyramid.txt')
const latticeMi = require('raw-loader!./lattice_mi.txt')
const latticeTian = require('raw-loader!./lattice_tian.txt')
const pinyinGrid = require('raw-loader!./pinyin_grid.txt')
const roundTable = require('raw-loader!./round_table.txt')
const sphere = require('raw-loader!./sphere.txt')
const threePyramid = require('raw-loader!./three_pyramid.txt')

export const svgTextGrid = {
  enGrid: { xml: enGrid, width: 780, height: 200, name: 'enGrid' },
  latticeMi: { xml: latticeMi, width: 780, height: 200, name: 'latticeMi' },
  latticeTian: {
    xml: latticeTian,
    width: 780,
    height: 200,
    name: 'latticeTian'
  },
  pinyinGrid: { xml: pinyinGrid, width: 780, height: 200, name: 'pinyinGrid' }
}

export const svgTextFigure = [
  { name: '圆锥体', text: cone },
  { name: '正方体', text: cube },
  { name: '长方体', text: cuboid },
  { name: '圆柱体', text: cylinder },
  { name: '二面体', text: dihedron },
  { name: '四棱锥', text: fourPyramid },
  { name: '圆台', text: roundTable },
  { name: '球体', text: sphere },
  { name: '三棱锥', text: threePyramid }
]

const solidLine = require('raw-loader!./shape/solidLine.txt')
const dashedLine = require('raw-loader!./shape/dashedLine.txt')
const arrowShape = require('raw-loader!./shape/arrow.txt')
const rectangle = require('raw-loader!./shape/rectangle.txt')
const rectangleRadius = require('raw-loader!./shape/rectangleRadius.txt')
const triangle = require('raw-loader!./shape/triangle.txt')
const parallelogram = require('raw-loader!./shape/parallelogram.txt')
const trapezoid = require('raw-loader!./shape/trapezoid.txt')
const diamond = require('raw-loader!./shape/diamond.txt')
const square = require('raw-loader!./shape/square.txt')
const circle = require('raw-loader!./shape/circle.txt')
const halfCircle = require('raw-loader!./shape/halfCircle.txt')
const bigBrackets = require('raw-loader!./shape/bigBrackets.txt')
const star = require('raw-loader!./shape/star.txt')
const heartShape = require('raw-loader!./shape/heartShape.txt')
const sun = require('raw-loader!./shape/sun.txt')
const moon = require('raw-loader!./shape/moon.txt')
const cloud = require('raw-loader!./shape/cloud.txt')
const flower = require('raw-loader!./shape/flower.txt')
const medal = require('raw-loader!./shape/medal.txt')
const ellipse = require('raw-loader!./shape/ellipse.txt')
const rightTriangle = require('raw-loader!./shape/rightTriangle.txt')

export const svgTextShape = [
  { name: '默认', text: solidLine },
  { name: '直线', text: solidLine, xml: solidLine },
  { name: '虚线', text: dashedLine, xml: dashedLine },
  { name: '箭头', text: arrowShape, xml: arrowShape },
  { name: '长方形', text: rectangle },
  { name: '圆角长方形', text: rectangleRadius },
  { name: '三角形', text: triangle },
  { name: '平行四边形', text: parallelogram },
  { name: '梯形', text: trapezoid },
  { name: '菱形', text: diamond },
  { name: '正方形', text: square },
  { name: '圆形', text: circle },
  { name: '半圆', text: halfCircle },
  { name: '长方体', text: cuboid, xml: cuboid, width: 0, height: 0 },
  { name: '圆柱体', text: cylinder, xml: cylinder, width: 0, height: 0 },
  { name: '圆锥体', text: cone, xml: cone, width: 0, height: 0 },
  { name: '球体', text: sphere, xml: sphere, width: 180, height: 200 },
  { name: '大括号', text: bigBrackets },
  { name: '星星', text: star },
  { name: '心形', text: heartShape },
  { name: '太阳', text: sun },
  { name: '月亮', text: moon },
  { name: '云朵', text: cloud },
  { name: '花朵', text: flower },
  { name: '奖章', text: medal },
  { name: '椭圆', text: ellipse },
  { name: '直角三角形', text: rightTriangle },
  { name: '正方体', text: cube, xml: cube, width: 180, height: 180 },
  { name: '三棱锥', text: threePyramid, xml: threePyramid, width: 0, height: 0 }
]
