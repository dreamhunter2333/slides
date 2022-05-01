---
theme: seriph
background: #fafafa
class: 'text-center'
highlighter: shiki
---

# Mac 安装配置 - MySQL 社区版

`MySQL` 社区版是世界上最流行的开源数据库的一个免费下载版本，由一个活跃的开源开发人员和爱好者社区提供支持。

![mysql](/brew-mysql/mysql.png)

---

# 什么是 MySQL 数据库

MySQL 是一个数据库管理系统。如果我们要了解 MySQL 是什么，我们首先需要了解什么是数据库。

## 数据库介绍

顾名思义，数据库就是存档某些数据的仓库。但是这个仓库不是一个实体仓库，也不存储实体物品，而是存放数据。比如我们常见的：

- 我们在大型超市购物时，我们购买的商品的价格和折扣等信息就存在一个数据库中。
- 我们手机上的联系人信息是一个列表，这个列表数据也存在一个数据库中。
- 电子商务网站中的商品的库存和价格信息也存在于服务器的数据库中。
- 汽车 4S 店的服务客户的记录信息也会存储在一个数据库中。

可以说，在现在的信息化系统中，数据库无处不在。

数据库是一个以某种有组织的方式存储的数据集合。当人们收集了大量的数据后，应该把它们保存起来进一步的处理，进一步地抽取有用的信息。现在人们借助计算机和数据库技术科学地保存了大量的数据，以便更好地利用这些数据资源。

---

# MySQL 简介

## MySQL 简介

MySQL 是一个开放源码的关系数据库管理系统，开发者为瑞典 MySQL AB 公司。目前 MySQL 被广泛地应用在 Internet 上的大中小型网站中。由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，许多中小型网站为了降低网站总体拥有成本而选择了 MySQL 作为网站数据库。

## MySQL 版本

针对不同的用户，MySQL 分为两个不同的版本：

- MySQL 社区版：该版本完全免费，但是官方不提供技术支持。用户可以自由下载使用。
- MySQL 企业版服务器：为企业提供数据库应用，支持 ACID 事务处理，提供完整的提交、回滚、崩溃恢复和行政锁定功能。需要付费使用，官方提供技术支持。

对绝大多数应用而言，MySQL 社区版都能满足。

Read more about [mysql](https://www.mysql.com)

---

# MySQL 社区版的安装

## 安装 mysql

这里安装 5.7 版本演示

<br/>

```bash
brew install mysql@5.7
```

<br/>

## 创建链接

5.7 版本需要手动链接

<br/>

```bash
brew link mysql@5.7
```

---

# MySQL 社区版的使用

## 启动

<br/>

```bash
mysql.server start --skip-grant-tables
```

<br/>

## 停止

<br/>

```bash
mysql.server stop
```

<br/>

## 进入 MySQL 控制台

<br/>

```bash
$ mysql -u root
mysql>
```

---

# 创建用户和数据库

在 MySQL 控制台 执行

## 创建用户

```
CREATE USER 'username'@'%' IDENTIFIED BY 'password';
```

<br/>

## 创建数据库

```
CREATE database demo;
```

<br/>

## 授权

```
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%';
```

<br/>

## 连接测试

```bash
mysql -uusername -ppassword
```

---

# 使用 mysqlworkbench 连接

## 安装 mysqlworkbench

```bash
brew install mysqlworkbench
```

## 连接

![mysqlworkbench](/brew-mysql/mysqlworkbench.png)

---
layout: center
---

# Thank You

参考资料

- [https://www.mysql.com](https://www.mysql.com)
- [https://www.sjkjc.com/mysql/what-is-mysql/](https://www.sjkjc.com/mysql/what-is-mysql/)
