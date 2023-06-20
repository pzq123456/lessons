# 出题
参考 https://www.cnblogs.com/qyf2199/p/12104922.html
## 题目
四、设计题/实践题(50 分)

阅读如下材料，以此为背景，完成后面的要求。

材料：
学校图书馆的各类藏书数量以及的库存量临界值等数据记录在库存清单主文件中，各类书籍摆放在书架上。需要借书时，通过条码或二维码查找书籍所在书架，给出当前所在位置到需要借阅的图书位置导航路线。读者借书还书时，系统都需要验证读者身份的有效性。图书需要图书管理员根据系统给出的导航信息进行手动出入库。
现在假设你是该图书管理系统的项目负责人，请完成以下任务：

1. 画出 UML 用例图，并做简要说明。
2. 根据以下任务表格绘制出甘特图及任务网络图。
3. 现假设该系统的导航功能基于栅格模型，

```js
// 例子二 gridTraveler(m, n)
const gridTraveler = (m ,n, memo = {}) =>{
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n -1, memo);
    return memo[key];
}
// // test
// console.log(gridTraveler(1,1)); // 1
// console.log(gridTraveler(2,3)); // 3
// console.log(gridTraveler(3,2)); // 3
// console.log(gridTraveler(3,3)); // 6
// console.log(gridTraveler(18,18)); // 2333606220
```

分别面向对象的方法对该查书借书过程进行分析，在UML中用相应的视图反映用例捕获、系统分析和系统设计的成果。



## 参考答案
四、实践题/设计题（共50分）

正确制定方案（10分）
正确画图（5）
设计决策表（5）

导出测试用例（10）
设计测试用例（10分）
写出测试报告（10分）