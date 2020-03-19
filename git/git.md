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

### 8. 总结命令列表

```
/************************* 提交 拉取 *************************/ 
git add <file>                          // 后缀文件名可以指定添加某些文件到暂存区
git add --all/.                         // 可以将当前管理文件下的所有改动文件添加到暂存区
git commit -m '[message]'               // 提交暂存区内更改到版本库
git commit -a -m '[message]'            // 提交工作区内更改到版本库
git push origin [branch-name]           // 提交本地分支到远程
git push origin [branch-name] -f        // 强制推送分支,用于已知的冲突的情况下,不建议这样用
git pull                                // 将远程全部内容拉取到本地
git pull origin master                  // 拉去远程的maser分支

/************************* 回退 *************************/
git checkout -- <file>                  // 拉取暂存区文件 并将其替换成工作区文件  （修改之后想撤销）
git reset HEAD -- <file>                // 拉取最近一次提交到版本库的文件到暂存区  改操作不影响工作区    （add 之后想撤销）
git reset --soft [commit-id]            // 拉取版本库文件 并将其替换成工作区文件，保留commit-ID之后的提交  （commit 之后想撤销）；git push origin [branch-name] --force
git reset --hard [commit-id]            // 拉取版本库文件 并将其替换成工作区文件，删除commit-ID之后的提交  （commit 之后想撤销） ；git push origin [branch-name] --force

/************************* 初始化本地库 关联远端库 *************************/
git init                                // 会生成.git文件
git remote add origin '***.git'         // 将本地git关联到远程分支

/************************* 分支查看 切换 删除 *************************/
git branch                              // 查看本地branch
git branch -a                           // 可以查看本地和远程branch
git branch [branch-name]                // 创建分支,但是并没有切换到该分支.
git checkout [branch-name]              // 切换到远程存在的指定分支
git checkout -b [branch-name]           // 当前分支基础上，创建新分支并切换
git branch -d [branch-name]             // 删除本地分支
git branch -D [branch-name]             // 强行删除本地分支
git push origin --delete [branch-name]  // 删除远程分支

/************************* merge 中止 *************************/
git merge [branch-name]                 // 将指定分支合并到当前分支,如果发生冲突需要先解决相关冲突
git merge origin [branch-name]          // 将指定远程分支合并到当前分支
git merge --abort                       // 终止当前merge操作,这样就可以重新进行合并操作

/************************* 查看状态 log *************************/
git status                              // 查看状态
git log                                 // 查看提交的comment
git log --graph                         // 命令可以看到分支合并图
git reflog                              // 查看提交的commitID和comment

/************************* 打patch 中止 *************************/
git format-patch [commit-id]            // 生成某commit以来的修改patch（不包含该commit）	
git am ~/patch/*.patch                  // 将路径~/patch-set/*.patch 上的补丁按照先后顺序打上	
git am --abort                          // 终止打补丁	

/************************* 打tag *************************/

/************************* rebase *************************/

/************************* stash  *************************/
```