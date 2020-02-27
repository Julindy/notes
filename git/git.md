### 1. 查看设置用户名邮箱
```
git config --global user.name
git config --global user.email
```

```
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

### 2. ssh key 配置
```
ssh-keygen -t rsa -C "youremail@example.com"
cd ~
cat /c/Users/Administrator/.ssh/id_rsa.pub
```

### 3. 框图
![0db02a7bb505443b02600d5fdcf0482e](https://user-images.githubusercontent.com/26395119/62100685-49ebc380-b2c5-11e9-9018-5be44b0d838f.jpg)

### 4. git工作分区
-----------工作区--------------------暂存区--------------------版本库--------------------远端-----------
- 工作区：电脑里能看到的目录（Working Directory）
- 暂存区：stage
- 版本库：.git（Repository）；工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库；git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD。
- 远端：remote；例如 origin/master

### 5. 状态说明
- Untracked状态 	：未跟踪状态；.git未管理的文件
- unstage 状态	：未存储状态；没执行git add . 前的状态

### 6. 从远端拉取代码
- 方法一 (拉取一个分支）

```
cd 与远端同名目录
git init
git remote add origin "@git....."
git pull origin "分支"
```

- 方法二(拉取全部分支）

```
git clone "@git....."
```

### 7. 第一次提交本地文件到远端

```
git init
git add .
git commit -m "first commit"
git remote add origin git@github.com:wangdongsheng1993/blog.git
git push -u origin master  或者  git push -f origin master
```