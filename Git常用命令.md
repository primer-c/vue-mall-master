---
data: December 2 2020
title: Git常用命令
tags: Git
comment: true
---
### 1. Git本地仓库管理命令

#### 1. 创建本地仓库

- 在当前目录新建一个Git代码库

  ```bash
  git init
  ```

- 新建一个目录，将其初始化为Git代码库


  ```bash
  git init [project name]
  ```

- 下载一个项目和它的整个代码历史

  ```bash
  git clone [url]
  ```

#### 2. Git配置

1. Git的设置文件为.gitconfig;

2. 它可以全局配置，也可以项目配置;

- 显示当前的Git配置

  ```bash
  git config --list
  ```

- 编辑Git配置文件

  ```bash
  git config -e [--global]
  ```

- 设置提交代码时的用户信息

  ```bash
  git config [--global] user.name "[name]"
  git config [--global] user.email "[email address]"
  ```

#### 3. 增加/删除文件

- 添加指定文件到暂存区

  ```bash
  git add [file1] [file2] 
  ```

- 添加指定目录到暂存区，包括子目录

  ```bash
  git add [dir]
  ```

- 添加当前目录的所有文件到暂存区

  ```bash
  git add .
  ```

- 对于同一个文件的多处变化，可以实现分次提交

  ```bash
  git add -p
  ```

- 删除工作区文件，并且将这次删除放入暂存区

  ```bash
  git rm [file1] [file2] ..
  ```

- 停止追踪指定文件，但该文件会保留在工作区

  ```bash
  git rm --cached [file]
  ```

- 改名文件，并且将这个改名放入暂存区

  ```bash
  git mv [file-original] [file-renamed]
  ```

#### 4. 代码提交

- 提交暂存区到仓库区

  ```bash
  git commit -m [message]
  ```

- 提交暂存区的指定文件到仓库区

  ```bash
  git commit [file1] [file2] ... -m [message]
  ```

-  提交工作区自上次commit之后的变化，直接到仓库区

  ```bash
  git commit -a
  ```

- 提交时显示所有diff信息

  ```bash
  git commit -v
  ```

使用一次新的commit，替代上一次提交

- 如果代码没有任何新变化，则用来改写上一次commit的提交信息

  ```bash
  git commit --amend -m [message]
  ```

-  重做上一次commit，并包括指定文件的新变化

  ```bash
  git commit --amend [file1] [file2] ...
  ```

#### 5. 分支

- 

  ```bash

  ```


- 

  ```bash

  ```


- 

  ```bash

  ```

- 

  ```bash

  ```


- 

  ```bash

  ```


- 

  ```bash

  ```

- 

  ```bash

  ```


- 

  ```bash

  ```


- 

  ```bash

  ```

- 

  ```bash

  ```


- 

  ```bash

  ```


- 

  ```bash

  ```

- 

  ```bash

  ```


- 

  ```bash

  ```  
### 2. Git远程仓库管理命令

#### 1. 

#### 2. 

#### 3. 

#### 4. 

### 3. 参考文档

### 4. 联系方式

email: yuanmin8888@163.com
