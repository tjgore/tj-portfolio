---
title: "Going Back in Time With Git"
date: 2019-10-24
description: "Git has some very useful commands to allow us to undo changes like a master `Ctlr + Z` button for your project."
author: "TJ Gore"
authorLink: "https://tjwgore.com"
mainImage: ""
haveImage: false
color: "bg-orange-gradient"
keywords: ["Git has some very useful commands to allow us to undo changes"]
categories: ["Git"]
draft: true
---

## Intro

Git has some very useful commands to allow us to undo changes like a master `Ctlr + Z` button for your project.

Since I don't use these commands too often I usually tend to forget how to use them.
So I decided to write a short article to demonstrate these commands.

## Checkout

```bash
git checkout .
```

Checkout is commonly used for switching branches and moving the HEAD pointer but you can also use it to undo changes made to all your tracked files that have not been committed as yet.

Git lets you know if you have untracked files with `git status`.

You can also specify which file/s you want to undo with:

```bash
git checkout -- filename.ext
```

Some other uses for `checkout` are
switching branches
```bash
# switch to staging-website branch
git checkout staging-website
# switch back to master
git checout master
# switch back to the last branch you were on 
git checkout -

# creates the branch and switch to it
git checkout -b branch-name
```

and moving the HEAD pointer
```bash
git checkout <commit-hash>
# then create branch from this commit
git checkout -b 'new-start'
# move HEAD back to master 
git checkout master
```


## Revert

```bash
git revert <commit-hash>

# eg. commit be18001d7c84d5f641891a3d560c86a2ca829263
# the first couple characters is a valid commit hash = be18001d7
```
Revert goes back to a specific commit, using the `commit-hash`, undo any changes made at that 1 commit and makes a commit of your current files.

So if you added a couple pages or lines of code at the commit-hash, all those changes will be removed.

A commit hash is just a long alphanumeric id to represent your commit, to get a commit hash use:

```bash
git log
```
A revert helps to keep a record of all your commits made over time, as you will soon see, some commands delete your commit history.

Reverts are best used for when you already pushed up changes to a shared repo. You can undo things without messing up other users' local history. 


You can also undo a revert by using `git revert <revert-commit-hash>`.


## Reset

```bash
git reset HEAD .
```

The above command unstaged your changes. If you staged your files with `git add .`, you can remove them from staging with `git reset HEAD .`. 

This does not delete or undo any changes, it only changes the files' state.

At this point you could use `git checkout .` to remove any changes.

```bash
git reset HEAD~0 or <commit-hash>

# same as
git reset --mixed HEAD~1 or <commit-hash>
```
This reset uses `--mixed` by default and will delete your last commit from history and add the file changes of the commit into your working area.

```bash
git reset --soft HEAD~2 or <commit-hash>
```
This reset with `--soft` will delete your last 2 commits and add the changes to your staging area, already `git add .`.

They can be removed from staging with `git reset HEAD . ` or just use `reset --mixed` to go straight to the working area.

```bash
git reset --hard HEAD~3 or <commit-hash>
```
This reset is dangerous because it deletes your previous commit history and all the commit and working area changes. 

We should **NEVER** delete public commits, because other developers of the repo may be dependent on those commits.
A safer alternative would be a `revert`.

You could undo a reset by using

```bash
git reflog
```
and execute a reset on the commit hash found there. It's easier to use the hash rather than the HEAD when undoing a reset.

## Clean

Git clean removes untracked files and changes.

```bash
git clean -n

git clean -nd
```

Git clean, used with `-n`, will tell us what will be removed without removing it.
Add `-d` to also include directories.

To delete the untracked files use the `-f` param.

```bash
git clean -f
```

To delete files included in the `.gitignore` use `-x`.

```bash
# show what will be removed
git clean -nxd

git clean -xd
```

