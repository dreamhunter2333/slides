---
theme: seriph
background: #fafafa
class: 'text-center'
highlighter: shiki
---

# 在 Linux 或 WSL 上使用 Projector Server 安装、配置和运行 JetBrains IDEs

[https://github.com/JetBrains/projector-installer](https://github.com/JetBrains/projector-installer)

---

# projector-installer 安装

<br/>

## 安装依赖

<br/>

```bash
sudo apt install python3 python3-pip python3-cryptography python3-netifaces -y
python3 -m pip install -U pip
sudo apt install less libxext6 libxrender1 libxtst6 libfreetype6 libxi6 -y
```

<br/>

## 安装 projector-installer

<br/>

```bash
python3 -m pip install projector-installer
```

---

# 安装 IDE

<br/>

```bash
$ ~/.local/bin/projector install
Checking for updates ... done.
Installing IDE in quick mode; for full customization you can rerun this command with "--expert" argument or edit this config later via "projector config edit" command.
        1. Idea_Community
        2. Idea_Ultimate
        ...
Choose IDE type or 0 to exit: [0-13]: 1
Do you want to select from Projector-tested IDE only? [y/N]n
        1. IntelliJ IDEA Community Edition 2022.1.1
        2. IntelliJ IDEA Community Edition 2022.1
        ...
Choose IDE number to install or 0 to exit: [0-27]: 1
Installing IntelliJ IDEA Community Edition 2022.1.1
Downloading ideaIC-2022.1.1.tar.gz
[##------------------------------------------------]    5%  00:01:36
```

---

# projector 配置 IDE

## projector 配置

<br/>

```bash
$ ~/.local/bin/projector config edit IntelliJ
Checking for updates ... done.
Edit configuration IntelliJ
Enter the path to IDE (<enter> for /home/dreamhunter/.projector/apps/idea-IC-221.5591.52, <tab> for complete):
Use separate configuration directory for this config? [y/N]
Enter a Projector listening port (press ENTER for default) [9999]: 12345
Would you like to specify listening address (or host) for Projector? [y/N]0.0.0.0
Invalid input, please answer y or n.
Would you like to specify listening address (or host) for Projector? [y/N]y
Enter a Projector listening address (press ENTER for default) [localhost]: 0.0.0.0
Would you like to specify hostname for Projector access? [y/N]n
Use secure connection (this option requires installing a projector's certificate to browser)? [y/N]n
Would you like to set password for connection? [y/N]n
	   1. tested
	   2. not_tested
Choose update channel or 0 to keep current(not_tested): [0-2]: 0
done.
```

---

# projector 运行 IDE

<br/>

```bash
$ ~/.local/bin/projector run IntelliJ
Checking for updates ... done.
Configuration name: IntelliJ
Checking for updates ... done.
To access IDE, open in browser
	http://0.0.0.0:12345/

To see Projector logs in realtime run
	tail -f "/home/dreamhunter/.projector/configs/IntelliJ/projector.log"

To exit the IDE, select File | Exit inside the connected client. For force quit, press Ctrl+C (some changes and settings can be lost).
It seems that you are using WSL environment.
WSL is still experimental technology, and if you experience any issues accessing projector from browser please refer to Projector README file: https://github.com/JetBrains/projector-installer#resolving-wsl-issues
```

---

# projector IDE 的使用

## 通过 ssh 转发端口到本地

如果你使用了服务器可以配置下证书等信息，这里不多介绍

<br/>

```bash
ssh -L 12345:localhost:12345 laji233
```

---

# 浏览器打开地址

![main](/JetBrains-projector-installer/main.png)

---

# 安装 PWA 使用起来更加舒服

![pwa](/JetBrains-projector-installer/pwa.png)

---
layout: center
---

# Thank You

参考资料

- [https://github.com/JetBrains/projector-installer](https://github.com/JetBrains/projector-installer)
