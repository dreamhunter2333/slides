---
theme: seriph
background: #fafafa
class: 'text-center'
highlighter: shiki
---

# 不止 Anaconda, MacOS 更简洁的Python版本管理 -- pyenv

`pyenv` 允许您轻松地在多个版本的 `Python` 之间切换。它简单、不引人注目，并且遵循`UNIX`的传统，即单一用途的工具可以很好地完成一件事。

![Anaconda](/brew-pyenv/anaconda.png)

---

# 什么是 pyenv

该项目源自 `rbenv` 和 `ruby build`，并针对 `Python` 进行了修改。

```bash
$ pyenv versions
2.7.10
* 3.5.0 (set by /Users/yuu/.pyenv/version)
miniconda3-3.16.0
DVoV-2.6.0
$ python --version
Python 3.5.0
$ pyenv global pypy-2.6.0
$ python --version
Python 2.7.9 (295ee98b69288471b0fcf2e0ede82ce5209eb90b, Jun 01 2015, 17:30:13) [PyPy 2.6.0 with GCC 4.9.2]
$ cd /Volumes/treasuredata/jupyter
$ pyenv version
miniconda3-3.16.0 (set by /Volumes/treasuredata/.python-version)
§ python --version
Python 3.4.3 :: Continuum Analytics, Inc.
```

---

# 安装 Homebrew

首先介绍下安装 `homebrew`, 已安装的可跳过此节

## 安装 Homebrew

<br/>

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

将以上命令粘贴至终端。

脚本会在执行前暂停，并说明它将做什么。高级安装选项在 [这里](https://docs.brew.sh/Installation)。

<br/>
<br/>
<br/>
<br/>
<br/>

Read more about [https://brew.sh/](https://brew.sh/)

---

# pyenv 的安装

如果你需要 python 的 `tk` 支持，那么你需要安装 `tk`。

## 安装 tcl-tk

<br/>

```bash
brew install tcl-tk
```

<br/>

## 安装 pyenv

<br/>

```bash
brew install pyenv
```

---

# 使用 pyenv 安装某个版本的 python

## 获取可安装的版本列表

<br/>

```bash
pyenv install --list
```

<br/>

## 安装某个版本

<br/>

```bash
pyenv install 3.7.13
```

<br/>

## 安装目录

<br/>

```bash
/Users/$USER/.pyenv/versions/3.7.13
```

---

# 在终端中使用

## 创建虚拟环境

<br/>

```bash
/Users/$USER/.pyenv/versions/3.7.13/bin/python3 -m venv ./venv
```

<br/>

## 使用虚拟环境

<br/>

```bash
./venv/bin/python3 -m pip install -r requirements.txt
```

---

# 在 vscode 中使用

选择虚拟环境的解释器或者 `pyenv` 的解释器目录即可

![vscode](/brew-pyenv/vscode.png)

---

# 在 pycharm 中使用

从 `pyenv` 的解释器目录创建虚拟环境，或者直接选择 `pyenv` 的解释器目录即可

![pycharm](/brew-pyenv/pycharm.png)

---
layout: center
---

# Thank You

参考资料

- [https://brew.sh/](https://brew.sh/)
- [https://github.com/pyenv/pyenv](https://github.com/pyenv/pyenv)
