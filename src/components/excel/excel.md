#  table组件使用说明

## 对外emit

| 事件名  | 事件介绍                       | 事件参数                   |
| ------- | ------------------------------ | -------------------------- |
| select  | 下拉选择表格数据时的回调       | selection选中的数据数组    |
| size    | 分页器切换每次显示多少条的回调 | size当前一次选择多少条数据 |
| current | 分页器切换第几页的回调         | current当前选中的是第几页  |

- 触发select事件需要开启isChoose属性为true
- 触发size事件需要开启isPage属性为true
- 触发current事件需要开启isPage属性为true

## 对外暴露方法

| 方法名 | 方法介绍                                                     | 方法参数 |
| ------ | ------------------------------------------------------------ | -------- |
| handle | 返回size（一次选择多少条），current（当前选中的），selection（选中的数据数组） | 无       |

## props

| attr属性名   | attr介绍                     | attr属性值类型                        |
| ------------ | ---------------------------- | :------------------------------------ |
| tableData    | 表格数据                     | 数组                                  |
| tableColumns | 表格表头的配置               | 数组                                  |
| isChoose     | 是否可以多选（宽度固定）     | 布尔值，默认为false（即关闭多选）     |
| isStar       | 是否可以收藏（宽度固定）     | 布尔值，默认为false（即关闭收藏）     |
| isHeader     | 是否打开头部插槽             | 布尔值，默认为false（即关闭头部插槽） |
| isPage       | 是否显示分页器               | 布尔值，默认为true（即显示分页器）    |
| total        | 数据的总条数（往往接口获取） | 数字，默认为0条                       |
| isComputed   | 是否开启计算（减法）         | 布尔值，默认为false（即关闭减法计算） |
| minus        | 减法计算的数值               | 数字，默认为0                         |
| isFixedWidth | 是否开启计算（加法）         | 布尔值，默认为false（即关闭加法计算） |
| fixedWidth   | 加法计算的数值               | 数字，默认为0                         |
| isIndex      | 是否显示序号（宽度固定）     | 布尔值，默认为false（即关闭显示序号） |

- tableData与tableColumns必传，为最小配置

- tableData为显示的数据，往往是后端返回的，如果数组里面有3个对象，则表格一共有3行数据。如果对象里面的属性名和tableColumns里的对象的prop对应的名字保持一致，就会自动显示当前字段。否则需要使用插槽展示字段

  ```js
  [{
    date: '2016-05-02',
    option: '操作',
    name: '王小虎'
  }, {
    date: '2016-05-04',
    option: '操作',
    name: '王小虎'
  }]
  ```

- tableColumns为表头的配置，往往是固定不发生变化。以下是基础配置，与tableData一一对应

  ```js
  [
    {
      label: '日期',
      prop: 'date',
      minLength: 150
    },
    {
      label: '姓名',
      prop: 'name',
      minLength: 150
    },
    {
      label: '操作',
      prop: 'option',
      minLength: 150
    }
  ]
  ```

- tableColumns数组里的对象完整配置

  ```js
  {
    label: '操作',//表头的字段
    prop: 'option',//对应tableData的名字
    minLength: 150,//自适应表格在浏览器改变宽高时的当前列的最小宽度，如果所有列的最小宽度之和小于设定的总宽度，会有自适应效果，宽度按比例增大
    sort: true,//对应列是否可以排序，如果设置为true，则代表可以排序如果设置为false则相反
    fixed: true,//列是否固定在左侧或者右侧，true 表示固定在左侧(可选值有true, left, right)默认不固定
    align: 'left'//每一个单元格的显示对齐方式，默认为left（可选值有left/center/right）
  }
  ```

- isComputed与minus配合使用，使用时将isComputed设置为true，然后计算总宽度与需要减去的值

  如：左侧侧边栏的宽度为202px（边框2px），表格的margin值为20px，则minus需设置为242

- isFixedWidth与fixedWidth配合使用，使用时将isFixedWidth设置为true，然后计算表格的总宽度

  如：弹框内的表格的内容宽度确认为400px，则fixedWidth需设置为400

- isComputed与minus的搭配，isFixedWidth与fixedWidth的搭配，只能二选一

- 最小宽度只需考虑tableColumns自身的配置，不需考虑序号、收藏、多选的宽度

## 插槽

- 内容插槽

  name即为tableColumns配置项的prop属性

  作用域插槽支持的参数为row和column

  ```html
  <template #name="{ row }">
    <el-button @click="doDetail(row)">
      {{row.name}}
    </el-button>
  </template>
  ```

- 头部插槽

  需要设置isHeader为true，同时插槽的名字name要改为nameHeader

  作用域插槽支持的参数为column

  ```html
  <template #nameHeader>
    <div style="color:red;">
      价格（必填）
    </div>
  </template>
  ```

- footer插槽

  可以在表格下部自定义按钮等内容。可以自定义样式

  ```html
  <template #footer>
    <el-button @click="batchEdit">
      编辑商品信息
    </el-button>
  </template>
  ```

- 使用内容插槽和头部插槽将会代替原本name的数据显示，占据原来的位置

## 使用真实示例

```html
<table-comp
  :tableData="tableData"
  :tableColumns="columns"
  :total="total"
  ref="table"
  isChoose
  isHeader
  isComputed
  :isPage="isPage"
  @select="onSelect"
  :minus="340">      
  <template #number="{ row }">
    <el-button type="text" class="button" @click="doDetail(row)">
      {{row.number}}
    </el-button>
    <tag-comp style="margin-left:5px;" :type="2" />
  </template>
  <template #name="{ row }">
    <el-button type="text" class="button ellipsis" @click="doDetail(row)">
      {{row.name}}
    </el-button>
  </template>
  <template #rightStatus="{ row }">
    <el-button type="text" class="button ellipsis">
      {{row.rightStatus === 4 ? '是': '—'}}
    </el-button>
  </template>
  <template #price="{ row }">
    <el-button type="text" class="button ellipsis">
      {{row.patentGoodsDetail.price}}
    </el-button>
  </template>
  <template #contactsMobile="{ row }">
    <el-button type="text" class="button ellipsis">
      {{row.patentGoodsDetail.contactsMobile}}
    </el-button>
  </template>
  <template #priceHeader>
    <div style="color:red;">
      价格（必填）
    </div>
  </template>
  <template #contactsMobileHeader>
    <span style="color:red;">
      联系方式
    </span>
  </template>
  <template #option="{ row }">
    <el-button type="text" @click="editSale(row.id)">
      编辑商品信息
    </el-button>
    <el-button v-if="isPackage(row)" type="text" @click="editPatent">
      编辑此专利包
    </el-button>
      <el-button v-else type="text" @click="addPatent">
      添加到专利包
    </el-button>
    <el-button type="text">
      删除
    </el-button>
  </template>
  <template #footer>
    <el-button class="button-down" @click="batchEdit">
      编辑商品信息
    </el-button>
    <el-button @click="batchAdd">
      添加到专利包
    </el-button>
    <el-button @click="batchDelete">
      删除
    </el-button>
  </template>
  <template #otherMoney>
    <image-button />
  </template>
</table-comp>
```

```js
[
  {
    label: '商品状态',
    prop: '_publishStatusText',
    minLength: 120
  },
  {
    label: '专利/专利包号',
    prop: 'patentNo',
    minLength: 230
  },
  {
    label: '专利/专利包名称',
    prop: 'goodsName',
    minLength: 300
  },
  {
    label: '交易内容',
    prop: '_rightStatusText',
    minLength: 100
  },
  {
    label: '价格',
    prop: 'price',
    minLength: 120
  },
  {
    label: '锁定条件',
    prop: 'condition',
    minLength: 180
  },
  {
    label: '过户保证金',
    prop: 'money',
    minLength: 100
  },
  {
    label: '授权未下证',
    prop: 'rightStatus',
    minLength: 100
  },
  {
    label: '其他声明',
    prop: 'other',
    minLength: 100
  },
  {
    label: '联系方式',
    prop: 'contactsMobile',
    minLength: 140
  },
  {
    label: '数字资产',
    prop: 'otherMoney',
    minLength: 100
  },
  {
    label: '操作',
    prop: 'option',
    fixed: 'right',
    minLength: 350,
    align: 'center'
  }
]
```

```js
[{
  id: 1234,
  status: '创建成功',
  content: '申请权',
  number: 'CN202011020872.6',
  name: '带有可倾斜图像传感器的数码相机',
  packageType: 'package',
  price: '0.00'
},{
  id: 1235,
  status: '创建成功',
  content: '申请权',
  number: 'CN202011020872.6',
  name: '带有可倾斜图像传感器的数码相机',
  packageType: 'simple',
  price: '0.00'
}]
```

## 遗留bug

由于内部的计算总宽度的算法问题，可能会在某些情况下右侧有几像素的偏差，打开border属性使用边框表格时尤为明显。因此，建议使用无边框表格，同时注意所在容器背景颜色

# UseExcelTemp类

## 对外暴露静态方法

- UseExcelTemp.getExcelData(file)

  根据file对象获取excel的数据

  获取的数据格式：最外层是数组，有几张excel表就有几个对象。数组里嵌套的对象有一个属性名为表名，属性值为数组，当前excel表有几条数据该数组就有几个嵌套对象。最里面这个对象的属性名为行列号，属性值为行列号对应的值。

- UseExcelTemp.dataToExcel(data, storage.session.get('excelColumns', []), fileName.value)

  根据数组data和excel所需要解析行列号的数组及excel文件名字生成excel文件

  fileName为字符串格式，data数据格式同上

  excelColumns示例：

  ```js
  ['A','B','C','AA','BA','VA']
  ```

# 整体功能

1. 告知您当前excel的表共解析几列
2. 导入整个excel文件
3. 输入Excel表A列关键字搜索
4. 修改当前excel表的数据
5. 全部导出当前excel表
6. 将勾选的数据导出excel表
7. 分页展示当前excel表
8. 使用session缓存表格编辑的内容