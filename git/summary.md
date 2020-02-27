### 总结命令列表

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