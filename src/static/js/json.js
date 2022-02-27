
const navList = [
  { id: 1, name: '保险', color: 'orange', badge: '必看', img: '/static/images/home/grid-icon/1.png', },
  { id: 2, name: '二手车', color: '', badge: '', img: '/static/images/home/grid-icon/2.png', },
  { id: 3, name: '查违章', color: 'orange', badge: '热卖', img: '/static/images/home/grid-icon/3.png', },
  { id: 4, name: '洗车', color: '', badge: '', img: '/static/images/home/grid-icon/4.png', },
  { id: 5, name: '美容', color: '', badge: '', img: '/static/images/home/grid-icon/5.png', },
  { id: 6, name: '保养', color: '', badge: '', img: '/static/images/home/grid-icon/6.png', },
  { id: 7, name: '轮胎', color: '', badge: '', img: '/static/images/home/grid-icon/7.png', },
  { id: 8, name: '维修', color: 'red', badge: '必看', img: '/static/images/home/grid-icon/8.png', },
  { id: 9, name: '其他', color: '', badge: '', img: '/static/images/home/grid-icon/9.png', },
  { id: 10, name: '其他', color: '', badge: '', img: '/static/images/home/grid-icon/10.png', },
]

const classifyList = [
  {
    label: '推荐', id: 1, subList: [
      { id: 1, name: '劳斯莱斯', description: '描述---顶级豪车', imgUrl: 'https://img2.baidu.com/it/u=14996419,1148618318&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200' },
      { id: 10, name: '布加迪', description: '描述---顶级豪车', imgUrl: 'https://img2.baidu.com/it/u=2421668596,2346589815&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500' },
      { id: 11, name: '迈巴赫', description: '描述---顶级豪车', imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcools.qctt.cn%2F1610347929646.jpeg&refer=http%3A%2F%2Fcools.qctt.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646646067&t=34b3d216a51dd027289ff1a11dad90c9' },
    ]
  },
  { label: '洗车', id: 2, subList: [{ id: 1, name: '法拉利', description: '描述---顶级豪车', imgUrl: 'https://img1.baidu.com/it/u=2997437898,570836953&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' }] },
  { label: '美容', id: 3, subList: [{ id: 1, name: '兰博基尼', description: '描述---顶级豪车', imgUrl: 'https://img2.baidu.com/it/u=881436382,2233737298&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500' }] },
  { label: '保养', id: 4, subList: [{ id: 1, name: '布加迪', description: '描述---顶级豪车', imgUrl: 'https://img1.baidu.com/it/u=2070792727,3309067370&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313' }] },
  { label: '车险', id: 5, subList: [{ id: 1, name: '凯迪拉克', description: '描述---顶级豪车', imgUrl: 'https://img0.baidu.com/it/u=2453777314,1466744130&fm=253&fmt=auto&app=138&f=JPEG?w=725&h=500' }] },
  { label: '轮胎', id: 6, subList: [{ id: 1, name: '宾利', description: '描述---顶级豪车', imgUrl: 'https://img0.baidu.com/it/u=429215423,4013843249&fm=26&fmt=auto' }] },
  { label: '钣喷', id: 7, subList: [{ id: 1, name: '五菱神车', description: '描述---顶级豪车', imgUrl: 'https://img1.baidu.com/it/u=560789764,1484012596&fm=26&fmt=auto' }] },
  {
    label: '车品', id: 8, subList: [
      { id: 1, name: '保时捷', description: '描述---顶级豪车', imgUrl: 'https://img0.baidu.com/it/u=440877787,2529384055&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281' },
      { id: 2, name: '迈凯伦', description: '描述---顶级豪车', imgUrl: 'https://img2.baidu.com/it/u=3598350270,388341640&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800' },
      { id: 3, name: '西尔贝', description: '描述---顶级豪车', imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcs2.gtaall.com%2Fscreenshots%2F4dc09%2F2020-02%2Foriginal%2F78d9391d37ab846b9dea52974d48491ff72ad162%2F776797-GTAIV-2020-02-12-19-32-56-77.jpg&refer=http%3A%2F%2Fcs2.gtaall.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646646212&t=3d86731ed54de328bd360fe9290b7559' },
      { id: 4, name: '柯尼塞格', description: '描述---顶级豪车', imgUrl: 'https://img0.baidu.com/it/u=632246936,3929520022&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' },
      { id: 5, name: '莱肯', description: '描述---顶级豪车', imgUrl: 'https://img0.baidu.com/it/u=471668945,508780118&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' },
      { id: 6, name: '宾利', description: '描述---顶级豪车', imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww2.autoimg.cn%2Fchejiahaodfs%2Fg17%2FM06%2FAC%2F6B%2Fautohomecar__ChwEo2Ba4T-ASHrIAAHkjOiUVrU167.jpg&refer=http%3A%2F%2Fwww2.autoimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646646338&t=80d9830734ee145810c2161e59f6c8b5' },
      { id: 7, name: '帕加尼', description: '描述---顶级豪车', imgUrl: 'https://img1.baidu.com/it/u=1561496403,2252353518&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800' },
    ]
  },
]

const bannerList = [
  {
    bgColor: 'linear-gradient(#141414, #f1f1f1)',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F2018_Website_appreciate%2F2018-08-02%2F20180802222740b3vUOb3vUO.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646404043&t=a3798528f2c2f59502d85a68e94eff6f'
  },
  {
    bgColor: 'linear-gradient(#224450, #f1f1f1)',
    url: 'https://img0.baidu.com/it/u=1916385903,3128459022&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  },
  {
    bgColor: 'linear-gradient(#e6a488, #f1f1f1)',
    url: 'https://img1.baidu.com/it/u=3450965035,958161570&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  },
]

const nearSite = [
  {
    id: 1,
    latitude: 39.909,
    longitude: 116.39742,
    width: 26,
    height: 26,
    callout: {
      // content: '123123',
      // color: '#000',
      // bgColor: '#fff',
      fontSize: 14,

    },
    label: {
      content: '天庭',
      bgColor: '#5bc8ff',
      padding: 5,
      // anchorX: -10,
    },
    iconPath: '../../static/icon/icon_location.png'
  },
  {
    id: 2,
    latitude: 39.908,
    longitude: 116.39842,
    width: 26,
    height: 26,
    callout: {
      // content: '123123',
      // color: '#000',
      // bgColor: '#fff',
      fontSize: 14,

    },
    label: {
      content: '星辰阁',
      bgColor: '#5bc8ff',
      padding: 6,
      // anchorX: -10,
    },
    iconPath: '../../static/icon/icon_location.png'
  },
  {
    id: 3,
    latitude: 39.906,
    longitude: 116.39742,
    width: 26,
    height: 26,
    callout: {
      // content: '123123',
      // color: '#000',
      // bgColor: '#fff',
      fontSize: 14,

    },
    label: {
      content: '昆仑山',
      bgColor: '#5bc8ff',
      padding: 6,
      // anchorX: -10,
    },
    iconPath: '../../static/icon/icon_location.png'
  },
  {
    id: 4,
    latitude: 39.906,
    longitude: 116.39742,
    width: 26,
    height: 26,
    callout: {
      // content: '123123',
      // color: '#000',
      // bgColor: '#fff',
      fontSize: 14,

    },
    label: {
      content: '不死火山',
      bgColor: '#5bc8ff',
      padding: 6,
      // anchorX: -10,
    },
    iconPath: '../../static/icon/icon_location.png'
  },
  {
    id: 5,
    latitude: 39.905,
    longitude: 116.39642,
    width: 26,
    height: 26,
    callout: {
      // content: '123123',
      // color: '#000',
      // bgColor: '#fff',
      fontSize: 14,

    },
    label: {
      content: '凡音宫',
      bgColor: '#5bc8ff',
      padding: 6,
      // anchorX: -10,
    },
    iconPath: '../../static/icon/icon_location.png'
  },
  {
    id: 6,
    latitude: 39.903,
    longitude: 116.39542,
    width: 26,
    height: 26,
    callout: {
      // content: '123123',
      // color: '#000',
      // bgColor: '#fff',
      fontSize: 14,

    },
    label: {
      content: '玉虚宫',
      bgColor: '#5bc8ff',
      padding: 6,
      // anchorX: -10,
    },
    iconPath: '../../static/icon/icon_location.png'
  },
  {
    id: 7,
    latitude: 39.901,
    longitude: 116.39342,
    width: 26,
    height: 26,
    callout: {
      // content: '123123',
      // color: '#000',
      // bgColor: '#fff',
      fontSize: 14,

    },
    label: {
      content: '紫霄宫',
      bgColor: '#5bc8ff',
      padding: 6,
      // anchorX: -10,
    },
    iconPath: '../../static/icon/icon_location.png'
  },

]

const goodsList = [{ id: 1, name: '保时捷', description: '描述---顶级豪车', imgUrl: 'https://img0.baidu.com/it/u=440877787,2529384055&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281' },
{ id: 2, name: '迈凯伦', description: '描述---顶级豪车', imgUrl: 'https://img2.baidu.com/it/u=3598350270,388341640&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800' },
{ id: 3, name: '西尔贝', description: '描述---顶级豪车', imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcs2.gtaall.com%2Fscreenshots%2F4dc09%2F2020-02%2Foriginal%2F78d9391d37ab846b9dea52974d48491ff72ad162%2F776797-GTAIV-2020-02-12-19-32-56-77.jpg&refer=http%3A%2F%2Fcs2.gtaall.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646646212&t=3d86731ed54de328bd360fe9290b7559' },
{ id: 4, name: '柯尼塞格', description: '描述---顶级豪车', imgUrl: 'https://img0.baidu.com/it/u=632246936,3929520022&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' },
{ id: 5, name: '莱肯', description: '描述---顶级豪车', imgUrl: 'https://img0.baidu.com/it/u=471668945,508780118&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' },
{ id: 6, name: '宾利', description: '描述---顶级豪车', imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww2.autoimg.cn%2Fchejiahaodfs%2Fg17%2FM06%2FAC%2F6B%2Fautohomecar__ChwEo2Ba4T-ASHrIAAHkjOiUVrU167.jpg&refer=http%3A%2F%2Fwww2.autoimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646646338&t=80d9830734ee145810c2161e59f6c8b5' },
{ id: 7, name: '帕加尼', description: '描述---顶级豪车', imgUrl: 'https://img1.baidu.com/it/u=1561496403,2252353518&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800' },
{ id: 8, name: '法拉利', description: '描述---顶级豪车', imgUrl: 'https://img1.baidu.com/it/u=2997437898,570836953&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' }]

export {
  navList,
  classifyList,
  bannerList,
  nearSite,
  goodsList
}