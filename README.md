Tech Assignment: HTML, CSS, and JavaScript - Pravaah Consulting
<br>
#Creating Pokemon Comparison website.
<br>
#Setup Git enviornment and created gihub repo using git init command after that connect vs code to github id.
<br>
#Added Bootstrap css & js library.
<br>
#linked Css & js file to Html file.
<br>
#created 2 dropdowns and its value after that created 2 cards and render the information using api into the cards and compare the pokemons.
<br>
#git commands which i have used.
<br>
PS D:\Pokemon> git init
Initialized empty Git repository in D:/Pokemon/.git/
PS D:\Pokemon> git add.
git: 'add.' is not a git command. See 'git --help'.

The most similar command is
        add
PS D:\Pokemon> git --help
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]     
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]    
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]       
           [--config-env=<name>=<envvar>] <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG
collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
PS D:\Pokemon> git add .
PS D:\Pokemon> git commit -m "created index.html file"
[master (root-commit) debfab4] created index.html file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html
PS D:\Pokemon> git status
On branch master
nothing to commit, working tree clean
PS D:\Pokemon>

PS D:\Pokemon> git status
On branch master
Your branch is up to date with 'origin/master'.

  (use "git restore <file>..." to discard changes in working directory)
        modified:   asset/style.css
        modified:   index.html

  (use "git add <file>..." to include in what will be committed)

no changes added to commit (use "git add" and/or "git commit -a")
PS D:\Pokemon> git add .
PS D:\Pokemon> git commit -m "Designed Nav bar"
[master 2d44f68] Designed Nav bar
 4 files changed, 30 insertions(+), 1 deletion(-)
 create mode 100644 asset/Images/pokemon_img.png
 create mode 100644 asset/Images/pokemon_logo.png
PS D:\Pokemon> git branch
* master
PS D:\Pokemon> git push -u origin master
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 4 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 372.29 KiB | 16.19 MiB/s, done.
Total 8 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/kishansingh1108/Pokemon.git
   00a05a5..2d44f68  master -> master
branch 'master' set up to track 'origin/master'.

are"
 4 files changed, 179 insertions(+), 24 deletions(-)
 create mode 100644 .vscode/settings.json
git: 'add.' is not a git command. See 'git --help'.

The most similar command is
        add
PS D:\Pokemon> git add .
PS D:\Pokemon> git commit -m
error: switch `m' requires a value
PS D:\Pokemon> git commit -m "First and Second"
[master 88229e1] First and Second
 1 file changed, 2 insertions(+), 2 deletions(-)
PS D:\Pokemon> git push -u
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Delta compression using up to 4 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (12/12), 3.38 KiB | 576.00 KiB/s, done.
Total 12 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/kishansingh1108/Pokemon.git
   2d44f68..88229e1  master -> master
branch 'master' set up to track 'origin/master'.
